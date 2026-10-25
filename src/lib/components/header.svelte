<script lang="ts">
  import * as cowsay from "cowsay";
  import quotes from "$lib/content/quotes.json";
  import { toggleMode, mode } from "mode-watcher";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";

  const STORAGE_KEY = "quote_offset";

  let currentQuote = $state<string | null>(null);
  let mounted = $state(false);

  function getNextIndex(): number {
    if (!quotes || quotes.length === 0) return 0;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== null) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && Number.isInteger(parsed)) {
          return ((parsed % quotes.length) + quotes.length) % quotes.length;
        }
      }
      return Math.floor(Math.random() * quotes.length);
    } catch {
      return Math.floor(Math.random() * quotes.length);
    }
  }

  function advanceQuote() {
    if (!quotes || quotes.length === 0) return;
    const index = getNextIndex();
    currentQuote = quotes[index];
    const nextOffset = (index + 1) % quotes.length;
    try {
      localStorage.setItem(STORAGE_KEY, String(nextOffset));
    } catch {
      // Safe fallback if localStorage is unavailable
    }
  }

  onMount(() => {
    advanceQuote();
    mounted = true;
  });

  afterNavigate((navigation) => {
    if (
      mounted &&
      navigation.from &&
      navigation.to &&
      navigation.from.url.pathname !== navigation.to.url.pathname
    ) {
      advanceQuote();
    }
  });
</script>

<article class="header-section">
  <div class="cowsay-block">
    {#if mounted && currentQuote}
      <pre class="ascii-art">{cowsay.say({ text: currentQuote })}</pre>
    {/if}
  </div>

  <div class="command-block">
    <span class="prompt">$</span> <span class="command">whoami</span>
  </div>

  <h1 class="output">Ayushman Tripathy</h1>

  <div class="actions-block">
    <button onclick={toggleMode} class="theme-toggle">
      <span class="prompt">$</span> theme --toggle
      <span class="mode-text">[{#if mode.current === 'light'}light{:else}dark{/if}]</span>
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
    min-height: 5.8rem;
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
