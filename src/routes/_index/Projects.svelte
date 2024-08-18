<script>
  import Pin from "./Pin.svelte";
  import load from "$lib/loader.js"
  import { onMount } from "svelte";

  let titles= [], des = [];
  onMount(async () => {
    const arr = await load("projects.txt");
    titles = arr[0];
    des = arr[1];
  })

  function handleClick(ele) {
    location.href = "https://github.com/AyushmanTripathy/" + ele.srcElement.id;
  }
</script>

<main>
  <h1>Some of my projects.</h1>
  <section>
    {#each titles as title,i}
      <div on:click={handleClick} id="{title}">
        <h2 id="{title}">{title.replaceAll(/-|_/g," ")}</h2>
        <p id="{title}">{des[i]}</p>
      </div>
    {/each}
  </section>
  <p class="para">More on my 
    <a href="https://github.com/AyushmanTripathy/">Github</a>.
  </p>
</main>

<style lang="scss">
  main {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
    z-index: $page-index;
  }
  .para {
    @include para;
  }
  section {
    @include section(fit-content,90vw);
    @include grid(1fr 1fr, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    max-width: 700px;
  }
  div {
    @include shadow;
    background-color: $sec;
    border-radius: 10px;
    padding: 10px;
  }
  div:hover {
    border-color: $hl;
  }
  @media screen and (max-width: 500px) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
