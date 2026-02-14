<script lang="ts">
  import { page } from "$app/state";
  import ShowMore from "./ui/show-more.svelte";
</script>

{#snippet link(name: string, path: string)}
  {@const isSelected = page.url.pathname == path}
  <li>
    {#if isSelected}
      <p>[{name}]</p>
    {:else}
      <a href={path}>{name}</a>
    {/if}
  </li>
{/snippet}

<article class="w-full">
  <h2 class="font-bold">&gt; ls /www/pages</h2>
  <section class="flex flex-col gap-3">
    <ul class="grid grid-cols-4">
      {@render link("home", "/")}
      {@render link("links", "/links")}
      {@render link("movies", "/movies")}
      {@render link("blogs", "/blogs")}
    </ul>
  </section>
  <ShowMore hasNoMore={true}></ShowMore>
</article>
