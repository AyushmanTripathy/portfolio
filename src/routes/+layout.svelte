<script lang="ts">
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import Nav from "$lib/components/nav.svelte";
  import { ModeWatcher } from "mode-watcher";
  import "./layout.css";

  let { children } = $props();
</script>

<ModeWatcher />

<div
  class="flex text-sec bg-pri w-full py-10 justify-center h-full min-h-[100vh]"
>
  <main class="container px-3 max-w-[800px]">
    <Header />
    <Nav />
    {@render children()}
    <Footer />
  </main>
</div>
