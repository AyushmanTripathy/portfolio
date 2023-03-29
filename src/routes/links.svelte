<script>
  import BackButton from "./_common/backbutton.svelte";
  import { onMount } from "svelte";

  let headings = [], names = [], links = [];
  onMount(async () => {
    let res = await fetch("/links.txt");
    res = await res.text()
    
    res = res.split("|")
    let i =  1;
    while (i < res.length) {
      headings.push(res[i]);
      const a = headings.length - 1;
      i++;
      const temp = res[i].split("+").map(x => x.trim()).filter(Boolean);
      let x = 0;
      names[a] = [];
      links[a] = [];
      while (x < temp.length) {
        links[a].push(temp[x])
        names[a].push(temp[x + 1])
        x += 2;
      }
      i++;
    }
    
    console.log(links,names)
    headings = headings;
    names = names;
    links = links;
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
  @import "../app.scss";
  main {
    @include section(fit-content,100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
    @include mono;
    min-height: 100vh;
    background-color: $pri;
    color: $light;
  }
  h1 {
    border-bottom: 1px solid $hl;
  }
  p {
    @include para;
  }
</style>
