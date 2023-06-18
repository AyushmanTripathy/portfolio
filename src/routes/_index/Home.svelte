<script>
  import { onMount } from "svelte";
  
  let text = "";
  onMount(() => {
     let arrIndex = 0, index = 0, done = false;
     const strings = ["Hello Friend!////////////////","I am a Developer."]
     const write = (string) => {
       if (done) {
         text = text.slice(0,-1);
         if (!text.length) {
           done = false;
           return 1;
         }
       } else {
         if(string[index] != "/") text += string[index];
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
  <p>> {text}</p>
</main>

<style lang="scss">
  main {
    @include fullscreen;
    @include fixed(0,0);
    @include shadow;
    @include mono;
    @include flex(column);
    @include flex-center;
    @include cover("/layer.svg");

    z-index: 0;
    background-color: $pri;
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
    animation: 1000ms infinite blink;
    max-width: 80vw;
    text-align:center;
  }
  @keyframes blink {
    0%  { border-color: $pri; }
    20% { border-color: $light; }
    80% { border-color: $light; }
    100% {border-color: $pri }
  }
</style>
