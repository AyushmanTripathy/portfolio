<script>
  import Pin from "./Pin.svelte";
</script>

<main>
  <h1>Some of my projects.</h1>
  <section>
    <Pin repo="uhc"/>
    <Pin repo="pipe-script" />
    <Pin repo="razite" />
    <Pin repo="tik-tac-toe-ai" />
    <Pin repo="editmd" />
    <Pin repo="procedural_terrain_generation" />
  </section>
  <h1>Technologies i use,</h1>
    <p>lines of code on github.</p>
    <img
    src="https://github-readme-stats.vercel.app/api/top-langs/?username=AyushmanTripathy&layout=compact&exclude_repo=.config&hide_title=true&langs_count=8&theme=dark&hide_border=true&bg_color=303030"
    alt="most used language"
  />
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    background-color: $pri;
  }
  img {
    width: 90vw;
    max-width: 460px;
    height: 160px;
    aspect-ratio: 1;
  }
  section {
    @include section(fit-content,fit-content);
    @include grid(1fr 1fr, 1fr);
  }
  p {
    @include para;
  }
  @media screen and (max-width: $mobile) {
    section {
      grid-template-columns: 1fr;
    }
  }
</style>
