<script>
  import { onMount } from "svelte";

  let months = [], notes = [];
  onMount(async () => {
    let res= await fetch("journey.txt");
    res = await res.text()
    res = res.split("|").map((x) => x.trim()).filter(Boolean);
    for(let i = 0;i<res.length;i++) {
      months.push(res[i]);
      i++;
      notes.push(res[i].split("+").map(x => x.trim()).filter(Boolean))
    }
    months = months;
    notes = notes;
  })
  const isEven = (x) => x % 2 == 0;
</script>

<main>
  <h1>My Journey</h1>
  <p class="para">
    I don't know where time will take me but i hope it's in the right
  direction.</p>
  <section>
    {#each notes as note,i}
      <div class={isEven(i) ? "left" : "right"}>
        <h2>{months[i]}</h2>
        {#each note as line}
          <p>{line}</p>
        {/each}
      </div>
    {/each}
  </section>
  <p class="para">Thank you for reading my story.</p>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    color: $light;
    background-color: $pri;
    text-align:center;
  }
  section {
    @include section(fit-content,fit-content);
    background: linear-gradient($tri, $tri) no-repeat center/1px 80%;
  }
  .para {
    @include para;
  }
  div {
    @include section(fit-content,40vw);
    position: relative;
  }
  $diff: 25vw;
  .left {
    text-align: left;
    left: $diff;
  }
  .right {
    text-align: right;
    right: $diff;
  }
  @media only screen and (max-width: 450px) {
    section {
      background: none;
    }
    .left, .right {
      text-align: center;
      left: 0;
      right: 0;
      width: 80vw;
    }
  }
</style>
