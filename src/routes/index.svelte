<script>
  import Home from "./_index/Home.svelte";
  import About from "./_index/About.svelte";
  import Projects from "./_index/Projects.svelte";
  import Contact from "./_index/Contact.svelte";
</script>

<Home />
<main>
  <section></section>
  <About />
  <Projects />
  <Contact />
</main>

<style lang="scss">
  @import "../app.scss";
  main {
    @include absolute;
    @include section(fit-content,100vw);
    @include flex(column);
    z-index: 1;
    color: $light;
  }
  section {
    @include fullscreen;
    background-color: transparent;
  }
</style>
