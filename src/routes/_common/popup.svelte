<script>
  export let msg;
</script>

<main id="popup">
  <div>
    <p>{msg}</p>
  </div>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include flex(column);
    @include flex-center;
    @include fixed(0,0);
    @include section(fit-content, 100vw);
    display:none;
    background: transparent;
  }
  div {
    @include mono;
    @include shadow;
    z-index: 11;
    width: 80vw;
    max-width: 400px;
    text-align:center;
    border-radius: 10px;
    background-color: $sec;
    padding: 10px;
  }
</style>
