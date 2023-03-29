<script>
  import Pin from "./Pin.svelte";
  import { onMount } from "svelte";

  let titles= [], des = [];
  onMount(async () => {
    let res= await fetch("projects.txt");
    res = await res.text()
    res = res.split("|").map((x) => x.trim()).filter(Boolean);
    for(let i = 0;i<res.length;i++) {
      titles.push(res[i]);
      i++;
      des.push(res[i].split("+").map(x => x.trim()).filter(Boolean))
    }
    titles = titles;
    des = des;
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
  @import "../../app.scss";
  main {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
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
    border: 3px solid $sec;
    border-radius: 10px;
    padding-left: 5px;
    padding-right: 3px;
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
