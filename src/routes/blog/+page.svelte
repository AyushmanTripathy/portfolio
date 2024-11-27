<script>
  import blogs from "$lib/blog.json";
</script>

<main>
  <h1> My Blogs </h1>
  {#each blogs as blog}
  <p>
    <a href="/blog/{blog.id}">{blog.heading}</a>
  </p>
  {/each}
</main>

<style lang="scss">
  main {
    @include fullscreen;
    @include flex(column);
    @include flex-center;
    background: $pri;
    color: $light;
  }
  h1 {
    border-bottom: 1px solid $hl;
  }
  a {
    @include mono;
    color: $light;
  }
</style>
