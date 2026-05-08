<script lang="ts">
  import ShowMore from "$lib/components/ui/show-more.svelte";
  import blogs from "$lib/content/blog.json";

  type Blog = (typeof blogs)[number];

  let isExpanded = $state<boolean[]>(new Array(blogs.length).fill(false));

  function expandBlog(blogIdx: number) {
    isExpanded = isExpanded.map((_, i) => i === blogIdx ? !isExpanded[i] : false);
  }
</script>

<svelte:head>
  <title>Blogs | Ayushman Tripathy</title>
  <meta name="description" content="Read technical articles and personal insights by Ayushman Tripathy, presented in a unique terminal-inspired 'man page' format." />
  <link rel="canonical" href="https://ayushmantripathy.netlify.app/blogs" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ayushmantripathy.netlify.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blogs",
              "item": "https://ayushmantripathy.netlify.app/blogs"
            }
          ]
        },
        {
          "@type": "CollectionPage",
          "name": "Blogs | Ayushman Tripathy",
          "description": "Technical articles and personal insights by Ayushman Tripathy.",
          "url": "https://ayushmantripathy.netlify.app/blogs"
        }
      ]
    }
  </script>
</svelte:head>

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
          <h3 class="section-content text-base font-bold">{blog.heading}</h3>
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
      <div class="flex items-center gap-2">
        <button class="man-toggle flex-1" onclick={() => expandBlog(blogIdx)}>
          <span class="toggle-icon">{isExpanded[blogIdx] ? '▼' : '▶'}</span>
          <span class="man-id">{blog.id}</span>
          <span class="man-heading">- {blog.heading}</span>
        </button>
        <a href="/blogs/{blog.id}" class="text-xs text-dim hover:text-primary transition-colors whitespace-nowrap">
          [open]
        </a>
      </div>
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
    color: var(--text-primary);
    margin: 0;
  }

  .section {
    font-weight: 600;
  }

  .pages {
    color: var(--text-muted);
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
    color: var(--text-primary);
  }

  .man-toggle:hover {
    background: rgba(128, 128, 128, 0.05);
  }

  .toggle-icon {
    color: var(--text-muted);
    font-size: 0.65rem;
    width: 1rem;
  }

  .man-id {
    color: var(--text-primary);
    font-weight: 600;
  }

  .man-heading {
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .man-page {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
  }

  .man-header-line {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid var(--border-color);
    background: rgba(128, 128, 128, 0.05);
  }

  .man-title {
    color: var(--text-primary);
    font-weight: 600;
  }

  .man-section {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid var(--border-color);
  }

  .man-section:last-child {
    border-bottom: none;
  }

  .section-name {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  .section-content {
    color: var(--text-primary);
    padding-left: 0;
  }

  .synopsis {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    align-items: center;
  }

  .cmd {
    color: var(--text-primary);
  }

  .flag {
    color: var(--text-muted);
  }

  .arg {
    color: var(--text-muted);
  }

  .description :global(p) {
    margin: 0.25rem 0;
    color: var(--text-primary);
  }

  .description :global(h2) {
    color: var(--text-primary);
    font-size: 0.85rem;
    margin: 0.5rem 0 0.25rem;
    font-weight: 600;
  }

  .description :global(pre) {
    background: rgba(128, 128, 128, 0.05);
    padding: 0.5rem;
    overflow-x: auto;
    font-size: 0.7rem;
    border: 1px solid var(--border-color);
    margin: 0.25rem 0;
  }

  .description :global(code) {
    color: var(--text-primary);
  }

  .description :global(a) {
    color: var(--color-tri);
    font-weight: 700;
  }

  .see-also {
    color: var(--text-primary);
    font-style: italic;
  }
</style>