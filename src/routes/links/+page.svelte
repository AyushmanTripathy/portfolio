<script lang="ts">
  import ShowMore from "$lib/components/ui/show-more.svelte";
  import links from "$lib/content/links.json";

  type Node = {
    [key: string]: string | Node;
  };

  let expandedSections = $state<Record<string, boolean>>({});

  function toggleSection(key: string) {
    expandedSections = { ...expandedSections, [key]: !expandedSections[key] };
  }
</script>

<svelte:head>
  <title>Links & Stuff | Ayushman Tripathy</title>
  <meta name="description" content="A curated collection stuff i like." />
</svelte:head>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; cat ~/.links.json</h2>
  <section class="links-container">
    <p class="comment"># Useful links I've collected over time</p>
    <p class="bracket">{'{'}</p>
    
    {#each Object.entries(links) as [category, content], categoryIdx}
      {@const isExpanded = expandedSections[category] !== false}
      {@const contentObj = typeof content === 'object' ? content : {}}
      {@const keys = Object.keys(contentObj)}
      {@const totalCount = keys.length}
      {@const collapsedCount = Math.min(3, totalCount)}
      
      <div class="category-block">
        <button 
          class="category-toggle" 
          onclick={() => toggleSection(category)}
        >
          <span class="key">"{category}"</span><span class="colon">:</span> <span class="bracket">{'{'}</span>
          {#if !isExpanded}
            <span class="collapsed-hint">// {collapsedCount} of {totalCount}</span>
            <span class="bracket">{'}'}{categoryIdx < Object.keys(links).length - 1 ? ',' : ''}</span>
          {/if}
        </button>
        
        {#if isExpanded}
          <div class="category-content">
            {#each Object.entries(contentObj) as [key, val], idx}
              {@const isLast = idx === Object.keys(contentObj).length - 1}
              
              {#if typeof val == "string"}
                <p class="link-item">
                  <span class="indent-1"></span>
                  <a href={val} target="_blank" class="key hover:underline">"{key}"</a><span class="colon">:</span> <span class="link-value">[hidden]</span>{isLast ? '' : ','}
                </p>
              {:else if typeof val == "object" && val !== null}
                {@const subKeys = Object.keys(val)}
                <div class="nested-block">
                  <p>
                    <span class="indent-1"></span>
                    <span class="key">"{key}"</span><span class="colon">:</span> <span class="bracket">{'{'}</span>
                  </p>
                  {#each Object.entries(val as Node) as [subKey, subVal], subIdx}
                    {@const isSubLast = subIdx === subKeys.length - 1}
                    <p class="link-item">
                      <span class="indent-2"></span>
                      {#if typeof subVal === 'string'}
                        <a href={subVal} target="_blank" class="key hover:underline">"{subKey}"</a>
                      {:else}
                        <span class="key">"{subKey}"</span>
                      {/if}
                      <span class="colon">:</span> <span class="link-value">[hidden]</span>{isSubLast ? '' : ','}
                    </p>
                  {/each}
                  <p><span class="indent-1"></span><span class="bracket">{'}'}{isLast ? ',' : ''}</span></p>
                </div>
              {/if}
            {/each}
          </div>
          <p><span class="bracket">{'}'}{categoryIdx < Object.keys(links).length - 1 ? ',' : ''}</span></p>
        {/if}
      </div>
    {/each}
    <p class="bracket">{'}'}</p>
  </section>
  <ShowMore hasNoMore={true}></ShowMore>
</article>

<style>
  .terminal-cmd {
    margin-bottom: 0.5rem;
  }

  .links-container {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    line-height: 1.6;
  }

  .comment {
    color: var(--text-muted);
    font-style: italic;
    margin: 0 0 0.25rem;
  }

  .bracket {
    color: var(--text-muted);
    margin: 0;
  }

  .key {
    color: var(--text-primary);
  }

  .colon {
    color: var(--text-dim);
  }

  .category-block {
    margin: 0;
  }

  .category-toggle {
    display: block;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    color: inherit;
  }

  .category-toggle:hover {
    opacity: 0.8;
  }

  .collapsed-hint {
    color: var(--text-dim);
    font-style: italic;
  }

  .category-content {
    margin-left: 0;
  }

  .link-item {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .nested-block {
    margin-left: 0;
  }

  .indent-1 {
    display: inline-block;
    width: 2ch;
  }

  .indent-2 {
    display: inline-block;
    width: 4ch;
  }

  .link-value {
    color: var(--text-dim);
    font-style: italic;
  }
</style>
