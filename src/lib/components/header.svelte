<script lang="ts">
  import * as cowsay from "cowsay";
  import quotes from "$lib/content/quotes.json";

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
</script>

<article class="flex flex-col pb-5 justify-center">
  <!-- header -->
  <!-- <img class="size-72 rounded-lg shadow-2xl" src="/logo.png" alt="logo" /> -->
  <div class="mx-auto">
    <pre class="text-xs">{cowsay.say({ text: randomQuote })}</pre>
  </div>
  <br />

  <h1 class="text-center">AYUSHMAN TRIPATHY</h1>
  <p class="text-center">
    <a target="_blank" href="https://github.com/AyushmanTripathy">[Github]</a>
    <a target="_blank" href="https://www.codechef.com/users/ayushmantripat"
      >[Codechef]</a
    >
    <a target="_blank" href="https://t.me/AyushmanTripathy">[Telegram]</a>
    <a href="mailto:ayushmantripathy2004@gmail.com">[Email]</a>
    <a target="_blank" href="https://www.hackerrank.com/profile/ayushmantripath3"> [Hackerrank] </a>
    <a target="_blank" href="https://www.youtube.com/@ayushmantripathy1917"> [Youtube] </a>
  </p>
</article>
