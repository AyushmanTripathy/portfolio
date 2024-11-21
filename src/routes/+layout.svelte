<script>
  import { onMount } from "svelte";
  let pointer, scrollFactor;
  let loadingComplete = false;
  onMount(() => {
    loadingComplete = document.readyState == "complete"
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        loadingComplete = true;
      }
    });

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
    document.onscroll = () => {
      scrollFactor =
        document.documentElement.scrollTop /
        (document.documentElement.scrollHeight - window.screen.height);
    };
  });
</script>

<div style="width:{scrollFactor * 100}vw;"></div>
<img id="pointer" bind:this="{pointer}" src="/pointer.svg" alt="pointer" />
<slot></slot>

<style lang="scss">
  section {
    @include fixed(0, 0);
    @include fullscreen;
    background-color: $pri;
    color: $light;
    z-index: 100;
  }
  div {
    @include fixed(0, 0);
    @include section(3px, 0);
    background-color: $hl;
    transition: width 500ms;
    z-index: 10;
  }
  #pointer {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 10;
    transform: rotate(-90deg);
    transition: 180ms;
  }
</style>
