<script lang="ts">
  import months from "$lib/content/journey.json";
  import ShowMore from "./ui/show-more.svelte";

  let noOfMonthsExpanded = $state(5);
  const expandedMonths = $derived(months.slice(0, noOfMonthsExpanded));
  const expandedLineCount = $derived.by(() => {
    let count = 0;
    for (const month of expandedMonths) count += month.notes.length;
    return count;
  });

  function showMore() {
    noOfMonthsExpanded += 5;
  }
</script>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; git log --oneline -n {expandedLineCount}</h2>
  
  <section class="log-section">
    <div class="log-header">
      <span class="commit-date">date</span>
      <span class="commit-msg">message</span>
    </div>
    
    {#each expandedMonths as month, monthIndex}
      <div class="month-group">
        <div class="month-header">
          <span class="month-label">{month.month}</span>
        </div>
        
        {#each month.notes as note, noteIndex}
          <div class="log-entry">
            <span class="commit-date">--</span>
            <span class="commit-msg">
              {#if typeof note == "string"}
                {note}
              {:else}
                <a target="_blank" href={note.link} class="log-link">{note.note}</a>
              {/if}
            </span>
          </div>
        {/each}
      </div>
    {/each}
  </section>

  <ShowMore onShowMore={showMore} hasNoMore={noOfMonthsExpanded >= months.length}>
    <p class="end-comment">&lt;!-- history ends here --&gt;</p>
  </ShowMore>
</article>

<style>
  .terminal-cmd {
    margin-bottom: 1rem;
  }

  .log-section {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.875rem;
    line-height: 1.7;
  }

  .log-header {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 0.5rem;
    padding: 0.25rem 0;
    border-bottom: 1px solid #333;
    margin-bottom: 0.5rem;
    color: #6b7280;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .month-group {
    margin-bottom: 0.75rem;
  }

  .month-header {
    padding: 0.25rem 0;
    margin-bottom: 0.25rem;
  }

  .month-label {
    color: #9ca3af;
    font-weight: 600;
  }

  .log-entry {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 0.5rem;
    padding: 0.125rem 0;
  }

  .commit-date {
    color: #4b5563;
  }

  .commit-msg {
    color: #d1d5db;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .log-link {
    color: #888;
    text-decoration: none;
  }

  .log-link:hover {
    text-decoration: underline;
    color: #bbb;
  }

  .end-comment {
    color: #4b5563;
    font-style: italic;
    margin-top: 0.5rem;
  }

  p {
    margin: 0;
    padding: 0;
  }
</style>