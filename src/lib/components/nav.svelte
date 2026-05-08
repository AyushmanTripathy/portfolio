<script lang="ts">
  import { page } from "$app/state";
  import ShowMore from "./ui/show-more.svelte";

  const navItems = [
    { name: "home", path: "/" },
    { name: "links", path: "/links" },
    { name: "movies", path: "/movies" },
    { name: "blogs", path: "/blogs" }
  ];
</script>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; ls -la ~/pages</h2>
  
  <section class="nav-section">
    <div class="nav-header">
      <span class="perm">drwxr-xr-x</span>
      <span class="owner">ayush</span>
      <span class="group">ayush</span>
      <span class="size">1024</span>
      <span class="date">Apr 14 12:00</span>
      <span class="name">name</span>
    </div>
    
    {#each navItems as item}
      {@const isSelected = page.url.pathname == item.path}
      <div class="nav-item" class:selected={isSelected}>
        <span class="perm">drwxr-xr-x</span>
        <span class="owner">ayush</span>
        <span class="group">ayush</span>
        <span class="size">-</span>
        <span class="date">--</span>
        {#if isSelected}
          <span class="name selected-name">{item.name}/</span>
        {:else}
          <a href={item.path} class="name">{item.name}/</a>
        {/if}
      </div>
    {/each}
  </section>

  <ShowMore hasNoMore={true}></ShowMore>
</article>

<style>
  .terminal-cmd {
    margin-bottom: 0.5rem;
  }

  .nav-section {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    line-height: 1.5;
  }

  .nav-header, .nav-item {
    display: grid;
    grid-template-columns: 100px 50px 50px 40px 80px 1fr;
    gap: 0.5rem;
    padding: 0.125rem 0;
  }

  .nav-header {
    color: var(--text-muted);
    border-bottom: 1px solid var(--border-color);
    margin-bottom: 0.25rem;
    font-size: 0.7rem;
  }

  .nav-item {
    padding: 0.125rem 0.25rem;
  }

  .nav-item:hover {
    background: rgba(128, 128, 128, 0.05);
  }

  .nav-item.selected {
    background: rgba(128, 128, 128, 0.08);
  }

  .perm {
    color: var(--text-muted);
  }

  .owner, .group {
    color: var(--text-dim);
  }

  .size {
    color: var(--text-muted);
  }

  .date {
    color: var(--text-dim);
  }

  .name {
    color: var(--text-muted);
    text-decoration: none;
  }

  .name:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }

  .selected-name {
    color: var(--text-primary);
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .nav-header, .nav-item {
      grid-template-columns: 1fr;
      gap: 0;
    }
    
    .perm, .owner, .group, .size, .date {
      display: none;
    }
  }
</style>