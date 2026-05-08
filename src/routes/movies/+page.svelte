<script lang="ts">
  import Movies from "$lib/components/movies.svelte";
</script>

<svelte:head>
  <title>Movies & TV Shows | Ayushman Tripathy</title>
  <meta name="description" content="A log of movies and TV shows watched by Ayushman Tripathy." />
  <link rel="canonical" href="https://ayushmantripathy.netlify.app/movies" />
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
              "name": "Movies",
              "item": "https://ayushmantripathy.netlify.app/movies"
            }
          ]
        },
        {
          "@type": "CollectionPage",
          "name": "Movies & TV Shows | Ayushman Tripathy",
          "description": "A log of movies and TV shows watched by Ayushman Tripathy.",
          "url": "https://ayushmantripathy.netlify.app/movies"
        }
      ]
    }
  </script>
</svelte:head>

<main class="flex flex-col gap-5">
  <Movies />
</main>
