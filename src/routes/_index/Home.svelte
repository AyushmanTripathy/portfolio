<script>
  import { onMount } from "svelte";
  
  let text = "";
  onMount(() => {
     let arrIndex = 0, index = 0, done = false;
     const strings = ["Full Stack Web Developer."]
     const write = (string) => {
       if (done) {
         text = text.slice(0,-1);
         if (!text.length) {
           done = false;
           return 1;
         }
       } else {
         text += string[index];
         index++;
         if (index >= string.length) {
           index = 0;
           if (arrIndex == strings.length - 1) return 1;
           done = true;
         }
       }
     }
     const id = setInterval(() => {
       if (write(strings[arrIndex])) {
         arrIndex++;
         if (arrIndex >= strings.length) clearInterval(id);
       }
     },150)
  })
</script>

<main>
  <img src="/logo.png" alt="logo" />
  <h1>Ayushman Tripathy</h1>
  <p>A {text}</p>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include fullscreen;
    @include fixed(0,0);
    @include shadow;
    @include mono;
    @include flex(column);
    @include flex-center;
    @include cover("/layer.svg");

    z-index: 0;
    color: $light;
  }
  img {
    @include shadow;
    aspect-ratio: 1;
    max-width: 200px;
    width: 40vw;
    border-radius: 10px;
  }
  p {
    border-right: 6px solid $light;
    animation: 550ms infinite blink;
    max-width: 80vw;
    text-align:center;
  }
  @keyframes blink {
    from {
      border-color: $light;
    }
    to {
      border-color: $pri;
    }
  }
</style>
