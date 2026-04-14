<script lang="ts">
  import ShowMore from "$lib/components/ui/show-more.svelte";
  import blogs from "$lib/content/blog.json";

  type Blog = (typeof blogs)[number];

  let isExpanded = $state<boolean[]>(new Array(blogs.length).fill(false));

  function expandBlog(blogIdx: number) {
    isExpanded = isExpanded.map((_, i) => i === blogIdx ? !isExpanded[i] : false);
  }
</script>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; man -k . | grep blog</h2>
  
  <section class="intro-section">
    <p class="man-header">
      <span class="section">Blog Manual Pages</span>
      <span class="pages">({blogs.length} pages found)</span>
    </p>
  </section>
</article>

{#each blogs as blog, blogIdx}
  <article class="w-full blog-entry">
    {#if isExpanded[blogIdx]}
      <div class="man-page">
        <div class="man-header-line">
          <span class="man-title">{blog.id}(1)</span>
          <span class="man-title">Ayushman Tripathy</span>
          <span class="man-title">{blog.id}(1)</span>
        </div>
        
        <div class="man-section">
          <div class="section-name">NAME</div>
          <div class="section-content">{blog.heading}</div>
        </div>
        
        <div class="man-section">
          <div class="section-name">SYNOPSIS</div>
          <div class="section-content synopsis">
            <span class="cmd">{blog.id}</span> [<span class="flag">-v</span>] [<span class="flag">--tags</span> <span class="arg">{blog.tags.join(' ')}</span>]
          </div>
        </div>
        
        <div class="man-section">
          <div class="section-name">DESCRIPTION</div>
          <div class="section-content description">
            {@html blog.html}
          </div>
        </div>
        
        <div class="man-section">
          <div class="section-name">SEE ALSO</div>
          <div class="section-content">
            {#each blog.tags as tag, i}
              <span class="see-also">{tag}(1)</span>{i < blog.tags.length - 1 ? ', ' : ''}
            {/each}
          </div>
        </div>
      </div>
    {/if}
    
    <div class="collapsed-view" class:expanded={isExpanded[blogIdx]}>
      <button class="man-toggle" onclick={() => expandBlog(blogIdx)}>
        <span class="toggle-icon">{isExpanded[blogIdx] ? '▼' : '▶'}</span>
        <span class="man-id">{blog.id}</span>
        <span class="man-heading">- {blog.heading}</span>
      </button>
    </div>
  </article>
{/each}

<style>
  .terminal-cmd {
    margin-bottom: 0.5rem;
  }

  .intro-section {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  .man-header {
    color: #6b7280;
    margin: 0;
  }

  .section {
    font-weight: 600;
  }

  .pages {
    color: #4b5563;
    margin-left: 0.5rem;
  }

  .blog-entry {
    margin-bottom: 0.5rem;
  }

  .collapsed-view {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .man-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 0.25rem 0;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    color: #9ca3af;
  }

  .man-toggle:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .toggle-icon {
    color: #6b7280;
    font-size: 0.65rem;
    width: 1rem;
  }

  .man-id {
    color: #d1d5db;
    font-weight: 600;
  }

  .man-heading {
    color: #6b7280;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .man-page {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    border: 1px solid #444;
    background: #0d0d0d;
  }

  .man-header-line {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #444;
    background: #1a1a1a;
  }

  .man-title {
    color: #d1d5db;
    font-weight: 600;
  }

  .man-section {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid #2a2a2a;
  }

  .man-section:last-child {
    border-bottom: none;
  }

  .section-name {
    color: #d1d5db;
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .section-content {
    color: #a3a3a3;
    padding-left: 0;
  }

  .synopsis {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    align-items: center;
  }

  .cmd {
    color: #d1d5db;
  }

  .flag {
    color: #888;
  }

  .arg {
    color: #6b7280;
  }

  .description :global(p) {
    margin: 0.25rem 0;
  }

  .description :global(h2) {
    color: #d1d5db;
    font-size: 0.85rem;
    margin: 0.5rem 0 0.25rem;
    font-weight: 600;
  }

  .description :global(pre) {
    background: #141414;
    padding: 0.5rem;
    overflow-x: auto;
    font-size: 0.7rem;
    border: 1px solid #333;
    margin: 0.25rem 0;
  }

  .description :global(code) {
    color: #a3a3a3;
  }

  .description :global(a) {
    color: #888;
    text-decoration: none;
  }

  .description :global(a:hover) {
    text-decoration: underline;
    color: #bbb;
  }

  .see-also {
    color: #888;
    font-style: italic;
  }
</style>