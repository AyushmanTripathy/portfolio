<script>
  import { onMount } from "svelte";

  let titles = [], contents = [];
  onMount(async () => {
    let res= await fetch("tech.txt");
    res = await res.text()
    res = res.split("|").map((x) => x.trim()).filter(Boolean);
    for(let i = 0;i<res.length;i++) {
      titles.push(res[i]);
      i++;
      contents.push(res[i].split("+").map(x => x.trim()).filter(Boolean))
    }
    titles = titles;
    contents = contents;
    console.log(titles)
    console.log(contents);
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
  @import "../../app.scss";
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
