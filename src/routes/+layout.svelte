<script>
  import { onMount } from "svelte";
  let scrollFactor;
  onMount(() => {
    /*
    document.onmousemove = ({ clientX, clientY }) => {
      const center_x = pointer.offsetLeft + pointer.width / 2;
      const center_y = pointer.offsetTop + pointer.height / 2;
      const radians = Math.atan2(clientX - center_x, clientY - center_y);
      const degree = radians * (180 / Math.PI) * -1 + 90;
      pointer.style["-moz-transform"] = "rotate(" + degree + "deg)";
      pointer.style["-webkit-transform"] = "rotate(" + degree + "deg)";
      pointer.style["-o-transform"] = "rotate(" + degree + "deg)";
      pointer.style["-ms-transform"] = "rotate(" + degree + "deg)";
    };
    */
    document.onscroll = () => {
      scrollFactor =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - window.screen.height);
    };
  });
</script>

<main>
  <img id="pointer" src="/pointer.svg" alt="pointer" />
  <section>
    <a href="/"> Home </a>
    <a href="/blog"> Blogs </a>
  </section>
</main>
<div style="width:{scrollFactor * 100}vw;"></div>
<slot></slot>

<style lang="scss">
  main {
    @include flex(row);
    @include fixed(0, 0);
    @include glass;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 5vh;
    color: $light;
    z-index: 100;
    padding-left: 5vw;
    padding-right: 5vw;
  }
  a {
    @include mono;
    color: $light;
    padding-left: 30px;
  }
  div {
    @include fixed(0, 0);
    @include section(3px, 0);
    background-color: $hl;
    transition: width 500ms;
    z-index: 1000;
  }
  #pointer {
    transform: rotate(-90deg);
  }
</style>
