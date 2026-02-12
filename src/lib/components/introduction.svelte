<script lang="ts">
  import ShowMore from "./ui/show-more.svelte";

  const age = $derived.by(() => {
    const birthday = new Date("08/08/2004");
    const ageDiff = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  });
</script>

<article class="w-full">
  <h2 class="font-bold">&gt; cat intro.txt</h2>
  <section class="flex flex-col gap-3">
    <p>Hello there!</p>
    <p class="text-justify">
      &emsp; I am a {age} year old full stack developer and GNU/Linux enthusiast.
      I do competative programming for fun. I love computers, FOSS, GNU/Linux, good
      humour, studying history, eating chicken and my family. I watch a lot of romcoms
      &amp sitcoms and enjoy shows like The Office, Suits and Mr.Robot. I am also
      tough to describe, atleast i find it hard.
    </p>

    <p class="text-justify">
      &emsp; I use Arch btw! you can checkout my <a
        target="_blank"
        href="https://github.com/AyushmanTripathy/dots"
      >
        [dotfiles]
      </a>. If you want to share a secret, here is my
      <a target="_blank" href="/public.txt"> [public key] </a>.
    </p>
  </section>
  <ShowMore hasNoMore={true}></ShowMore>
</article>
