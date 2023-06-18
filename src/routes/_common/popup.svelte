<script>
  export let msg;
</script>

<main id="popup">
  <div>
    <p>{msg}</p>
  </div>
</main>

<style lang="scss">
  $popup-index: 11;

  main {
    @include flex(column);
    @include flex-center;
    @include fixed(0, 0);
    @include section(fit-content, 100vw);
    display: none;
    z-index: $popup-index;
    background: transparent;
  }
  div {
    @include mono;
    @include shadow;

    width: 80vw;
    z-index: $popup-index;
    max-width: 400px;
    text-align: center;
    border-radius: 10px;
    background-color: $sec;
    padding: 10px;
  }
</style>
