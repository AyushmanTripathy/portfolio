<script>
  export let repo;
</script>

<a href="https://github.com/AyushmanTripathy/{repo}">
  <img
    src="https://github-readme-stats.vercel.app/api/pin/?username=AyushmanTripathy&theme=dark&hide_border=true&bg_color=202020&repo={repo}"
    alt="repo pin"
  />
</a>

<style lang="scss">
  @import "../../app.scss";
  img {
    width: 100%;
    aspect-ratio:3/1;
  }
  a {
    max-width: $pin-max-width;
    @include section(fit-content,90%);
  }
</style>
