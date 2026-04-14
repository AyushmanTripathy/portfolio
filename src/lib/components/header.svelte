<script lang="ts">
  import * as cowsay from "cowsay";
  import quotes from "$lib/content/quotes.json";

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
</script>

<article class="header-section">
  <div class="cowsay-block">
    <pre class="ascii-art">{cowsay.say({ text: randomQuote })}</pre>
  </div>

  <div class="name-block">
    <span class="prompt">$</span> <span class="command">whoami</span>
    <br />
    <span class="output">Ayushman Tripathy</span>
  </div>

  <div class="links-block">
    <div class="links-list">
      <a target="_blank" href="https://github.com/AyushmanTripathy" class="link">github</a>
      <span class="separator">|</span>
      <a target="_blank" href="https://www.codechef.com/users/ayushmantripat" class="link">codechef</a>
      <span class="separator">|</span>
      <a target="_blank" href="https://t.me/AyushmanTripathy" class="link">telegram</a>
      <span class="separator">|</span>
      <a href="mailto:ayushmantripathy2004@gmail.com" class="link">email</a>
      <span class="separator">|</span>
      <a target="_blank" href="https://www.hackerrank.com/profile/ayushmantripath3" class="link">hackerrank</a>
      <span class="separator">|</span>
      <a target="_blank" href="https://www.youtube.com/@ayushmantripathy1917" class="link">youtube</a>
    </div>
  </div>
</article>

<style>
  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.5rem;
    font-family: "JetBrains Mono", monospace;
  }

  .cowsay-block {
    margin-bottom: 1rem;
  }

  .ascii-art {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    line-height: 1.1;
    color: #6b7280;
    margin: 0;
  }

  .name-block {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
    text-align: center;
  }

  .prompt {
    color: #6b7280;
  }

  .command {
    color: #9ca3af;
  }

  .output {
    color: #d1d5db;
    padding-left: 1.5rem;
    display: block;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .links-block {
    text-align: center;
    font-size: 0.8rem;
  }

  .links-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.25rem;
  }

  .link {
    color: #888;
    text-decoration: none;
    padding: 0 0.25rem;
  }

  .link:hover {
    color: #d1d5db;
    text-decoration: underline;
  }

  .separator {
    color: #4b5563;
  }
</style>