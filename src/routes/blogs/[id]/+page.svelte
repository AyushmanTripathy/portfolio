<script lang="ts">
  import type { PageData } from "./$types";

  let { data } = $props<{ data: PageData }>();
  const blog = data.blog;
</script>

<svelte:head>
  <title>{blog.heading} | Ayushman Tripathy</title>
  <meta name="description" content="Read '{blog.heading}' by Ayushman Tripathy. A technical blog post in man-page format." />
  <link rel="canonical" href="https://ayushmantripathy.netlify.app/blogs/{blog.id}" />
  
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "{blog.heading}",
      "author": {
        "@id": "https://ayushmantripathy.netlify.app/#person"
      },
      "publisher": {
        "@id": "https://ayushmantripathy.netlify.app/#person"
      },
      "url": "https://ayushmantripathy.netlify.app/blogs/{blog.id}",
      "keywords": "{blog.tags.join(', ')}",
      "datePublished": "2024-11-20T08:00:00+00:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ayushmantripathy.netlify.app/blogs/{blog.id}"
      }
    }
  </script>
</svelte:head>

<div class="man-page mt-5">
  <div class="man-header-line">
    <span class="man-title">{blog.id}(1)</span>
    <span class="man-title">Ayushman Tripathy</span>
    <span class="man-title">{blog.id}(1)</span>
  </div>
  
  <div class="man-section">
    <div class="section-name">NAME</div>
    <h1 class="section-content text-base font-bold">{blog.heading}</h1>
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
  
  <div class="man-footer-line">
    <span class="man-title">Ayushman Tripathy</span>
    <span class="man-title">{blog.id}(1)</span>
  </div>
</div>

<div class="mt-5 text-center">
  <a href="/blogs" class="text-sm text-dim hover:text-primary transition-colors">
    &lt;-- back to all blogs
  </a>
</div>

<style>
  .man-page {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-primary);
  }

  .man-header-line, .man-footer-line {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background: rgba(128, 128, 128, 0.05);
  }

  .man-header-line {
    border-bottom: 1px solid var(--border-color);
  }

  .man-footer-line {
    border-top: 1px solid var(--border-color);
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
