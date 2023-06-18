<script>
  import { onMount } from "svelte";
  import load from "$lib/loader.js";

  let titles = [], contents = [];
  onMount(async () => {
    const arr = await load("tech.txt");
    titles = arr[0];
    contents = arr[1];
  })
</script>

<main>
  <h1>Technologies I use,</h1>
  <section>
    {#each contents as content,i}
      <div>
        <h2>{titles[i]}</h2>
        {#each content as line,x}
          <p>{`${x + 1}. ${line}`}</p>
        {/each}
      </div>
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;

    background-color: $pri;
    color: $light;
    padding-bottom: 20px;
  }
  section {
    @include section(fit-content,90vw);
    @include grid(1fr 1fr 1fr, 1fr);
    max-width: 500px;
  }
  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
  h2 {
    text-decoration: underline;
  }
  div {
    text-align: center;
  }
</style>
