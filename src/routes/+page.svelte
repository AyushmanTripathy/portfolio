<script>
  import Home from "./_index/Home.svelte";
  import About from "./_index/About.svelte";
  import Projects from "./_index/Projects.svelte";
  import Contact from "./_index/Contact.svelte";
  import Tech from "./_index/Tech.svelte";
</script>

<Home />
<main>
  <section></section>
  <About />
  <Projects />
  <Tech />
  <Contact />
  <footer>
    <p>
      made with ❤ and svelte.js by @AyushmanTripathy<br />
      <a href="https://github.com/AyushmanTripathy/portfolio"> source code</a>
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
    position: sticky;
    top: 0;
    left: 0;

    @include section(fit-content, 100vw);
    @include flex(column);
    z-index: $page-index;
    color: $light;
  }
  section {
    @include fullscreen;
    background-color: transparent;
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
