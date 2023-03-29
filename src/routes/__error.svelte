<script>
  import BackButton from "./_common/backbutton.svelte";
</script>

<BackButton url="/" />
<main>
  <h1>404 Error.</h1>
  <p><strong>Other Pages,</strong></p>
  <a href="/">/home</a>
  <a href="/about">/about</a>
  <a href="/links">/links</a>
</main>

<style lang="scss">
  @import "../app.scss";
  main {
    @include absolute;
    @include fullscreen;
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
    color: $light;
  }
  p {
    @include para;
  }
</style>
