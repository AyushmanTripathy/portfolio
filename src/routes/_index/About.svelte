<main>
  <h1> Hello there! 👋</h1>
  <p class="para">
    I am a {new Date().getYear() - 104} year old full stack web developer
    and Linux enthusiast. currently Sophomore at GIETU, Gunupur.
  </p>
  <p class="para">
    "The greatest tragedy of life is'nt in not reaching your goal,
    but in not having a goal to reach."
  </p>
  <p class="para">
    I am interested in
    <strong>Programming</strong>,
    <strong> FOSS </strong> and <strong> GNU/Linux</strong>.
  </p>
  <p class="para"> I use <strong>Arch</strong> btw! checkout my <a href="https://github.com/AyushmanTripathy/dots"> dotfiles</a>. </p>

  <h1> Wanna read more? </h1>
  <div id="links">
    <a href="/about"> My journey through life</a> 
    <p> | </p>
    <a href="/links">Good Corners of Internet</a>
  </div>
</main>

<style lang="scss">
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
    z-index: $page-index;
  }
  .para {
    @include para;
  }
  div {
    @include grid(1fr 1fr 1fr,1fr);
    @include section(fit-content,90vw);
    max-width: 500px;
    text-align:center;
  }
  a {
  }
</style>
