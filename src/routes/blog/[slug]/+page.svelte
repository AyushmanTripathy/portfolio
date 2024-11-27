<script>
  export let data;
</script>

<main>
  <section class="blog">
    <h1>{data.blogs[data.index].heading}</h1>

    <p class="tag">{#each data.blogs[data.index].tags as tag} #{tag} &nbsp; {/each}</p>
    {@html data.blogs[data.index].html}

    <h1>Other Blogs</h1>
    {#each data.blogs as blog}
    <p>
      <a href="/blog/{blog.id}">{blog.heading}</a>
    </p>
    {/each}
  </section>
</main>

<style lang="scss">
  main {
    @include flex(column);
    @include flex-center;
    @include mono;
    background: $pri;
    color: $light;
    width: 100vw;
    min-height: 100vh;
    padding-top: 15vh;
    padding-bottom: 15vh;
  }
  section {
    @include flex(column);
    text-align: justify;
    width: 95vw;
    max-width: 800px;
  }
  h1 {
    @include cursive;
    text-align: center;
    font-size: xxx-large;
  }
  .tag {
    @include mono;
    font-size: medium;
    text-align: center;
    color: $dim;
  }
  :global(pre) {
    @include shadow;
    overflow: auto;
    background: $sec;
    padding: 10px;
    border-radius: 10px;
  }
  a {
    color: $light;
  }
</style>
