<script>
  import Home from "./_index/Home.svelte";
  import About from "./_index/About.svelte";
  import Projects from "./_index/Projects.svelte";
  import Tech from "./_index/Tech.svelte";
  import Journey from "./_index/Journey.svelte"
</script>

<Home />
<main>
  <About />
  <Journey />
  <footer>
    <p>
      made with ❤ and svelte.js by @AyushmanTripathy <br />
      <a href="https://github.com/AyushmanTripathy/portfolio"> code </a>
      |
      <a href="https://kit.svelte.dev/"> svelte </a>
      |
      <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software"
        >FOSS</a
      >
    </p>
  </footer>
</main>

<style lang="scss">
  main {
    @include absolute;
    @include section(fit-content, 100vw);
    @include flex(column);
    z-index: $page-index;
    color: $light;
    padding-top: 100vh;
    pointer-events: none;
  }
  footer {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    text-align: center;
    color: $light;
    background-color: $pri;
  }
  a {
    color: $light;
  }
</style>
