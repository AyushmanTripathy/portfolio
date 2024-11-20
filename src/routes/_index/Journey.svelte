<script>
  import totalContent from "$lib/journey.json";

  let index = 5;
  let content = totalContent.slice(0, index);
  function showMore() {
    index += 4;
    if (index > totalContent.length) index = totalContent.length;
    content = totalContent.slice(0, index);
  }
  const isEven = (x) => x % 2 == 0;
</script>

<main>
  <h1> What i have been up to? </h1>
  <section>
    {#each content as entry,i}
      <div class={isEven(i) ? "left" : "right"}>
        <h2>{entry.month}</h2>
        {#each entry.notes as line}
          <p>{line}</p>
        {/each}
      </div>
    {/each}
  </section>
  {#if index == totalContent.length}
  <p class="para"> Sadly, i dont recall anything before that. </p>
  {:else}
  <p class="show-more para" on:click={showMore}> Show More </p>
  {/if}
</main>

<style lang="scss">
  main {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    text-align:center;
    background-color: $pri;
    pointer-events: auto;
  }
  section {
    @include section(fit-content,fit-content);
    background: linear-gradient($tri, $tri) no-repeat center/1px 90%;
  }
  .para {
    @include para;
  }
  .show-more {
    color: $hl;
    cursor: pointer;
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
