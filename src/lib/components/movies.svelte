<script lang="ts">
  import months from "$lib/content/journey.json";
  import ShowMore from "./ui/show-more.svelte";

  type Month = (typeof months)[number];

  let noOfMonthsExpanded = $state(4);
  const monthWithMovies = $derived(months.filter((x) => x.movies?.length));
  const expandedMonths = $derived(monthWithMovies.slice(0, noOfMonthsExpanded));
  
  const aggregateIntoYears = $derived.by(() => {
    const years: Record<string, { month: string; movies: string[] }[]> = {};
    for (const month of expandedMonths) {
      const year = month.month.split(" ")[1];
      if (year in years) years[year].push({ month: month.month.split(" ")[0], movies: month.movies || [] });
      else years[year] = [{ month: month.month.split(" ")[0], movies: month.movies || [] }];
    }
    return years;
  });

  function showMore() {
    noOfMonthsExpanded += 3;
  }

  const totalMovies = $derived(monthWithMovies.reduce((acc, m) => acc + (m.movies?.length || 0), 0));
</script>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; psql -c "SELECT title FROM watched_movies ORDER BY date DESC"</h2>
  
  <section class="movies-section">
    <div class="movies-header">
      <span class="db-tag">database</span>
      <span class="count">({totalMovies} records)</span>
    </div>

    <div class="year-group">
      {#each Object.keys(aggregateIntoYears).sort().reverse() as year}
        <div class="year-block">
          <div class="year-label">
            <span class="year-marker">▶</span>
            <span class="year-num">{year}</span>
          </div>
          
          <div class="months-list">
            {#each aggregateIntoYears[year] as monthData}
              <div class="month-block">
                <span class="month-name">{monthData.month}</span>
                <div class="movies-row">
                  {#each monthData.movies as movie, i}
                    <span class="movie-item">
                      <span class="movie-title">"{movie}"</span>{i < monthData.movies.length - 1 ? ',' : ''}
                    </span>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <ShowMore
    onShowMore={showMore}
    hasNoMore={noOfMonthsExpanded >= monthWithMovies.length}
  >
    <p class="end-comment">&lt;!-- and many more before tracking began --&gt;</p>
  </ShowMore>
</article>

<style>
  .terminal-cmd {
    margin-bottom: 0.5rem;
  }

  .movies-section {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.6;
  }

  .movies-header {
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  .db-tag {
    color: var(--text-muted);
    font-size: 0.75rem;
  }

  .count {
    color: var(--text-primary);
    font-size: 0.75rem;
  }

  .year-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .year-block {
    display: flex;
    flex-direction: column;
  }

  .year-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }

  .year-marker {
    color: var(--text-muted);
    font-size: 0.65rem;
  }

  .year-num {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.9rem;
  }

  .months-list {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .month-block {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .month-name {
    color: var(--text-primary);
    font-size: 0.75rem;
  }

  .movies-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .movie-item {
    white-space: nowrap;
  }

  .movie-title {
    color: var(--text-primary);
  }

  .end-comment {
    color: var(--text-muted);
    font-style: italic;
    margin-top: 0.5rem;
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>