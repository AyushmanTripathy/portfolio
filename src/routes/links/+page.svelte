<script lang="ts">
  import ShowMore from "$lib/components/ui/show-more.svelte";
  import links from "$lib/content/links.json";

  type Node = {
    [key: string]: string | Node;
  };

  const isArrayNode = (x: any) => {
    const y = Object.values(x)[0]
    if (!y) return false
    return (typeof y) == "string"
  }
</script>

{#snippet indent(level: number)}
  {@html "&nbsp;".repeat(level)}
{/snippet}

{#snippet LinkNode(node: Node, level: number)}
  {@const keys = Object.keys(node)}

  {#each keys as key, idx}
    {@const val = node[key]}
    {#if typeof val == "string"}
      {@render indent(level + 1)}
      <a target="_blank" href={val}> "{key}" </a>,
      <br />
    {:else if typeof val == "object"}
      {@const bracket = isArrayNode(val) ? "[]" : "{}"}
      {@render indent(level)}
      <span> "{key}": {bracket[0]} </span>
      <br />
      {@render LinkNode(val, level + 1)}
      {@render indent(level)}

      <span>
        {bracket[1] + (idx + 1 == keys.length ? "" : ",")}
      </span>
      <br />
    {/if}
  {/each}
{/snippet}

<article class="w-full">
  <h2 class="font-bold">&gt; cd links &amp;&amp; cat README.txt links.json</h2>
  <section class="flex flex-col gap-3">
    <p class="text-justify">Some other good corners of the internet.</p>
    <p>
      &lbrace;
      <br />
      {@render LinkNode(links, 1)}
      &rbrace;
    </p>
  </section>
  <ShowMore hasNoMore={true}></ShowMore>
</article>
