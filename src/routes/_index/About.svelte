<main>
  <h1>Hello there! 👋</h1>
  <p class="para">
    I am a {new Date().getYear() - 104} year old full stack web developer and
    Linux enthusiast. I do competative programming for fun. currently Sophomore
    at GIETU, Gunupur.
  </p>
  <p class="para">
    I love computers, FOSS, Linux, good humour, history, chicken and my
    family. I watch a lot of romcoms and enjoy shows like The Office, Suits and Mr.Robot.
  </p>
  <p class="para">
    I am also tough to describe, atleast i find it hard.
  </p>
  <p class="para">
    I use <strong>Arch</strong> btw! checkout my
    <a href="https://github.com/AyushmanTripathy/dots"> dotfiles</a>.
  </p>

  <a href="/links">Other good corners of the internet</a>
</main>

<style lang="scss">
  main {
    @include section(fit-content, 100vw);
    @include flex(column);
    @include flex-center;
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
    pointer-events: auto;
  }
  .para {
    @include para;
  }
  div {
    @include grid(1fr 1fr 1fr, 1fr);
    @include section(fit-content, 90vw);
    max-width: 500px;
    text-align: center;
  }
  a {
  }
</style>
