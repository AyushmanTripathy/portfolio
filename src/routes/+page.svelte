<script lang="ts">
  import Introduction from "$lib/components/introduction.svelte";
  import Journey from "$lib/components/journey.svelte";
</script>

<svelte:head>
  <title>Ayushman Tripathy</title>
  <meta name="description" content="My corner of the internet" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@id": "https://ayushmantripathy.netlify.app/#person"
      }
    }
  </script>
</svelte:head>

<main class="flex flex-col gap-5">
  <Introduction />
  <Journey />
</main>
