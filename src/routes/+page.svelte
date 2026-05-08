<script lang="ts">
  import Introduction from "$lib/components/introduction.svelte";
  import Journey from "$lib/components/journey.svelte";
</script>

<svelte:head>
  <title>Ayushman Tripathy | Portfolio & Personal Site</title>
  <meta name="description" content="Explore the personal portfolio of Ayushman Tripathy, a Full Stack Developer and Linux enthusiast. Features projects, blogs, and a journey log." />
  <link rel="canonical" href="https://ayushmantripathy.netlify.app/" />
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
