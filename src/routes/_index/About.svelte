<main>
  <h1> Hello there! 👋</h1>
  <p>
    I am a self-taught full stack web developer.
    I am {new Date().getYear() - 104} year old Javascript and Linux enthusiast.
    I am from the small town of
    <a href="https://en.wikipedia.org/wiki/Bhawanipatna"> Bhawanipatna </a>
    in Kalahandi, Odisha, India.
  </p>
  <p>
    "The greatest tragedy of life is'nt in not reaching your goal,
    but in not having a goal to reach."
  </p>
  <p>
    I am interested in
    <strong>Functional Programming</strong>, <strong>Web Development</strong>
    , <strong> Open Source </strong> and <strong> GNU/Linux</strong>.
  </p>
  <p>
    <a href="/about"> More About Me </a> |
    <a href="/links"> Links </a>
  </p>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
    @include shadow;
    @include mono;

    $radius: 80px;
    $padding: 3vh;
    padding-top: $padding;
    padding-bottom: $padding;
    border-top-left-radius: $radius;
    border-top-right-radius: $radius;
    background-color: $pri;
    color: $light;
  }
  p {
    @include para;
  }
</style>
