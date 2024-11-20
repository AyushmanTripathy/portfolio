<script>
  import quotes from "$lib/quotes.json";
  import Codechef from "$lib/svgs/Codechef.svelte";
  import Github from "$lib/svgs/Github.svelte";
  import Linkedin from "$lib/svgs/Linkedin.svelte";
  import Hackerrank from "$lib/svgs/Hackerrank.svelte";
  import Mail from "$lib/svgs/Mail.svelte";
  import { onMount } from "svelte";

  let text = "";
  let arrIndex = 0,
    index = 0,
    done = false;
  const strings = [
    "Hello Friend////////",
    quotes[Math.floor(Math.random() * quotes.length)],
  ];

  function write(strs) {
    if (done) {
      text = text.slice(0, -1);
      if (!text.length) {
        done = false;
        if (arrIndex == strs.length - 1) return true;
      }
      return false;
    }

    if (strs[index] != "/") text += strs[index];
    index++;
    if (index >= strs.length) {
      index = 0;
      done = true;
      return true;
    }
    return false;
  }

  onMount(() => {
    const id = setInterval(() => {
      if (write(strings[arrIndex])) {
        arrIndex++;
        if (arrIndex >= strings.length) clearInterval(id);
      }
    }, 150);
  });
</script>

<main>
  <img src="/logo.png" alt="logo" />
  <h1>Ayushman Tripathy</h1>
  <p>
    > {text}
    <span></span>
  </p>
  <section>
    <a href="mailto:ayushmantripathy2004@gmail.com">
      <Mail />
    </a>
    <a target="_blank" href="https://www.codechef.com/users/ayushmantripat">
      <Codechef />
    </a>
    <a target="_blank" href="https://github.com/AyushmanTripathy/">
      <Github />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/ayushman-tripathy">
      <Linkedin />
    </a>
    <a target="_blank" href="https://www.hackerrank.com/ayushmantripath3">
      <Hackerrank />
    </a>
  </section>
</main>

<style lang="scss">
  main {
    @include fullscreen;
    @include fixed(0, 0);
    @include shadow;
    @include mono;
    @include flex(column);
    @include flex-center;
    @include cover("/layer.svg");

    z-index: 0;
    background-color: $pri;
    color: $light;
  }
  section {
    @include grid(repeat(5, 1fr), 1fr);
    @include shadow;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    width: 90vw;
    height: 60px;
    max-width: 400px;
    background-color: $sec;
  }
  img {
    @include shadow;
    aspect-ratio: 1;
    max-width: 200px;
    width: 40vw;
    border-radius: 10px;
  }
  p {
    max-width: 90vw;
    text-align: center;
  }
  span {
    border-right: 6px solid $light;
    animation: 1000ms infinite blink;
  }
  @keyframes blink {
    0% {
      border-color: $pri;
    }
    20% {
      border-color: $light;
    }
    80% {
      border-color: $light;
    }
    100% {
      border-color: $pri;
    }
  }
</style>
