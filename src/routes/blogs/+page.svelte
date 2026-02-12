<script lang="ts">
  import ShowMore from "$lib/components/ui/show-more.svelte";
  import blogs from "$lib/content/blog.json";

  type Blog = (typeof blogs)[number];

  let isExpanded = $state<boolean[]>([]);

  function explandBlog(blogIdx: number) {
    for (let i = 0; i < blogs.length; i++) {
      if (i == blogIdx) isExpanded[i] = true;
      else isExpanded[i] = false;
    }
  }
</script>

<article class="w-full">
  <h2 class="font-bold">&gt; cat README.txt</h2>
  <section class="flex flex-col gap-3">
    <p class="text-justify">
      These are blogs i have written over the years.
    </p>
  </section>
  <ShowMore hasNoMore={true}></ShowMore>
</article>

{#each blogs as blog, blogIdx}
  <article class="w-full">
    <h2 class="font-bold">&gt; man {blog.id}</h2>
    {#if isExpanded[blogIdx]}
      <section>
        <strong> NAME </strong>
        <p class="indent-10">{blog.heading}</p>
        <p class="pt-3"><strong class="pt-3"> TAGS </strong></p>
        <p class="indent-10">{blog.tags.join(", ")}</p>
        <p class="pt-3"><strong> INTRODUCTION </strong></p>
        <div class="blog">
          {@html blog.html}
        </div>
      </section>
    {/if}
    <ShowMore
      onShowMore={() => explandBlog(blogIdx)}
      hasNoMore={isExpanded[blogIdx]}
    />
  </article>
{/each}
