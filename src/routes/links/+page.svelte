<script>
  import BackButton from "../_common/backbutton.svelte";
  import load from "$lib/loader.js";
  import { onMount } from "svelte";

  let headings = [], names = [], links = [];
  onMount(async () => {
    const arr = await load("links.txt");
    const tmpNames = [], tmpLinks = [];
    for (let i = 0; i < arr[0].length; i++) {
      tmpNames[i] = [];
      tmpLinks[i] = [];
      for (let x = 0; x < arr[1][i].length; x += 2) {
        tmpNames[i].push(arr[1][i][x + 1]);
        tmpLinks[i].push(arr[1][i][x]);
      }
    }
    headings = arr[0];
    names = tmpNames;
    links = tmpLinks;
  })
</script>

<BackButton url="/"/>
<main>
  <h1>My Links</h1>
  <p>Explore some good corners of internet.</p>

  {#each headings as heading,i}
    <p><strong>{heading}</strong></p>
    {#each links[i] as link,x}
      <a href="{link}">{names[i][x]}</a>
    {/each}
  {/each}
</main>

<style lang="scss">
  main {
    @include section(fit-content,100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
    @include mono;

    min-height: calc(100vh - $page-bottom-padding);
    background-color: $pri;
    color: $light;
    padding-bottom: $page-bottom-padding;
  }
  h1 {
    border-bottom: 1px solid $hl;
  }
  p {
    @include para;
  }
</style>
