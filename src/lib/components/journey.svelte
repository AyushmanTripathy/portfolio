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
  <h2 class="font-bold">&gt; head -{expandedLineCount} activity.md</h2>
  <section class="months w-full">
    {#each expandedMonths as month, monthIndex}
      <p>
        <strong class="font-bold"># {month.month}</strong>
        <br />
        {#each month.notes as note, noteIndex}
          {#if typeof note == "string"}
            - {note}
          {:else}
            - [{note.note}](<a target="_blank" href={note.link}> link </a>)
          {/if}
          <br />
        {/each}
      </p>
      <br />
    {/each}
  </section>
  <ShowMore onShowMore={showMore} hasNoMore={noOfMonthsExpanded >= months.length}>
    <p>&lt!-- Sadly, i dont recall anything before that. --&gt;</p>
  </ShowMore>
</article>
