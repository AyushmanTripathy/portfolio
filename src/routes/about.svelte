<script>
  import Home from "./_about/home.svelte";
  import Journey from "./_about/journey.svelte";
  import BackButton from "./_common/backbutton.svelte";
</script>

<BackButton url="/"/>
<main>
  <Home />
  <Journey/>
</main>

<style lang="scss">
  @import "../app.scss";
  main {
    @include section(fit-content,100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
  }
</style>
