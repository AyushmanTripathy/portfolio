<script>
  import BackButton from "./_common/backbutton.svelte";
</script>

<BackButton url="/"/>
<main>
  <h1>My Links</h1>
  <p>Explore some good corners of internet.</p>
  <p><strong>Youtubers</strong></p>
  <a href="https://www.youtube.com/c/Fireship">
    Fireship (web development)
  </a>
  <a href="https://www.youtube.com/user/Computerphile">
    Computerphile (computer science)
  </a>
  <a href="https://www.youtube.com/c/SebastianLague">
    SebastianLague (coding adventures)
  </a>
  <a href="https://www.youtube.com/c/BugsWriter0x1337">
    BugsWriter (GNU/Linux)
  </a>
  <a href="https://www.youtube.com/c/VitalityFitnessScience">
    Vitality (fitness)
  </a>
  <a href="https://www.youtube.com/c/KrautandTea">
    Kraut (history)
  </a>
  <p><strong>Stand up comedians</strong></p>
  <a href="https://www.youtube.com/c/AbhishekUpmanyuu">
    Abhishek Upmanyu
  </a>
  <a href="https://www.youtube.com/c/AnubhavSinghBassi">
    Anubhav Singh Bassi
  </a>
  <a href="https://www.youtube.com/virdas">
    Vir Das
  </a>
  <a href="https://www.youtube.com/c/ZakirKhan">
    Zakir Khan
  </a>
</main>

<style lang="scss">
  @import "../app.scss";
  main {
    @include section(fit-content,100vw);
    @include absolute;
    @include flex(column);
    @include flex-center;
    @include mono;
    min-height: 100vh;
    background-color: $pri;
    color: $light;
  }
  h1 {
    border-bottom: 1px solid $hl;
  }
  p {
    @include para;
  }
</style>
