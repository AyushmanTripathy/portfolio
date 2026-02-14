<script lang="ts">
  import months from "$lib/content/journey.json";
  import ShowMore from "./ui/show-more.svelte";

  type Month = (typeof months)[number];

  let noOfMonthsExpanded = $state(4);
  const monthWithMovies = $derived(months.filter((x) => x.movies?.length));
  const expandedMonths = $derived(monthWithMovies.slice(0, noOfMonthsExpanded));
  const aggregateIntoYears = $derived.by(() => {
    const years: Record<string, Month[]> = {};
    for (const month of expandedMonths) {
      const year = month.month.split(" ")[1];
      if (year in years) years[year].push(month);
      else years[year] = [month];
    }
    return years;
  });
  const expandedLineCount = $derived.by(() => {
    let count = 0;
    for (const month of expandedMonths) count += month.notes.length;
    return count;
  });

  function showMore() {
    noOfMonthsExpanded += 3;
  }
</script>

<article class="w-full">
  <h2 class="font-bold">&gt; more movies.yml | head -{expandedLineCount}</h2>
  <section class="months w-full">
    {#each Object.keys(aggregateIntoYears) as year}
      <p>{year}:</p>
      {#each aggregateIntoYears[year] as month}
        <p>
          &nbsp;
          <strong class="font-bold">{month.month?.split(" ")[0]}: </strong>
          [{month.movies?.map((x) => `"${x}"`).join(", ")}]
        </p>
        <br />
      {/each}
    {/each}
  </section>
  <ShowMore
    onShowMore={showMore}
    hasNoMore={noOfMonthsExpanded >= monthWithMovies.length}
  >
    <p># And so so many more, but they predate my movie tracking habit.</p>
  </ShowMore>
</article>
