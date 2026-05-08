<script lang="ts">
  import * as cowsay from "cowsay";
  import quotes from "$lib/content/quotes.json";
  import { toggleMode, mode } from "mode-watcher";

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
</script>

<article class="header-section">
  <div class="cowsay-block">
    <pre class="ascii-art">{cowsay.say({ text: randomQuote })}</pre>
  </div>

  <div class="command-block">
    <span class="prompt">$</span> <span class="command">whoami</span>
  </div>

  <h1 class="output">Ayushman Tripathy</h1>

  <div class="actions-block">
    <button onclick={toggleMode} class="theme-toggle">
      <span class="prompt">$</span> theme --toggle
      <span class="mode-text">[{#if mode.current === 'dark'}dark{:else}light{/if}]</span>
    </button>
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
    color: var(--text-muted);
    margin: 0;
  }

  .command-block {
    font-size: 1rem;
    text-align: center;
  }

  .prompt {
    color: var(--text-muted);
  }

  .command {
    color: var(--text-dim);
  }

  .output {
    color: var(--text-primary);
    display: block;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin: 1rem 0;
    font-size: 1.0rem;
    line-height: 1;
  }

  .actions-block {
    margin-bottom: 1rem;
  }

  .theme-toggle {
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    font-size: 0.875rem;
    color: var(--text-dim);
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .theme-toggle:hover {
    color: var(--text-primary);
  }

  .mode-text {
    color: var(--text-muted);
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
    color: var(--text-muted);
    text-decoration: none;
    padding: 0 0.25rem;
  }

  .link:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }

  .separator {
    color: var(--text-dim);
  }
</style>
