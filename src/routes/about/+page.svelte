<script>
  import Journey from "./Journey.svelte";
  import BackButton from "../_common/backbutton.svelte";
</script>

<BackButton url="/" />
<main>
  <Journey />
  <div></div>
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
    min-height: calc(100vh - $page-bottom-padding);
    padding-bottom: $page-bottom-padding;
    background-color: $pri;
    color: $light;
  }
</style>
