<script>
  import Home from "./Home.svelte";
  import Journey from "./Journey.svelte";
  import BackButton from "../_common/backbutton.svelte";
</script>

<BackButton url="/"/>
<main>
  <Home />
  <Journey/>
</main>

<style lang="scss">
  main {
    @include section(fit-content,100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
  }
</style>
