<script lang="ts">
  import Introduction from "$lib/components/introduction.svelte";
  import Journey from "$lib/components/journey.svelte";
</script>

<svelte:head>
  <title>Ayushman Tripathy</title>
  <meta name="description" content="My corner of the internet" />
</svelte:head>

<main class="flex flex-col gap-5">
  <Introduction />
  <Journey />
</main>
