<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    onShowMore?: () => void;
    hasNoMore: boolean;
    children?: Snippet;
  }
  const { onShowMore = () => {}, hasNoMore, children }: Props = $props();
</script>

<section>
  {#if hasNoMore}
    {@render children?.()}
    <hr class="my-3" />
  {:else}
    <div class="flex items-center gap-5">
      <div class="grow border-b h-0"></div>
      <button onclick={onShowMore}>Show More</button>
      <div class="grow border-b h-0"></div>
    </div>
  {/if}
</section>
