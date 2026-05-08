<script lang="ts">
  import ShowMore from "./ui/show-more.svelte";

  const age = $derived.by(() => {
    const birthday = new Date("08/08/2004");
    const ageDiff = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  });

  const systemInfo = $derived({
    os: "Arch Linux (btw)",
    location: "Kalahandi, Odisha, India",
    roles: ["Full Stack Developer", "CP Enthusiast", "Linux Enthusiast"],
    loves: ["FOSS", "History", "Chicken", "Family"]
  });
</script>

<article class="w-full">
  <h2 class="font-bold terminal-cmd">&gt; cat /etc/motd</h2>
  
  <section class="intro-section">
    <div class="greeting">
      <span class="prompt">$</span> <span class="echo">echo "Hello, World!"</span>
      <br />
      <span class="output">Hello, World!</span>
    </div>

    <div class="bio">
      <p>
        <span class="comment"># About me</span>
      </p>
      <p>
        I am: <span class="string">"Ayushman Tripathy"</span>,
      </p>
      <p>
        I age: <span class="number">{age}</span>,
      </p>
      <p>
        I am from: <span class="string">"{systemInfo.location}"</span>,
      </p>
      <p>
        I am a: <span class="bracket">[</span>
        {#each systemInfo.roles as role, i}
          <span class="string">"{role}"</span>{i < systemInfo.roles.length - 1 ? ', ' : ' '}
        {/each}
        <span class="bracket">]</span>,
      </p>
      <p>
        I love: <span class="bracket">[</span>
        {#each systemInfo.loves as love, i}
          <span class="string">"{love}"</span>{i < systemInfo.loves.length - 1 ? ', ' : ' '}
        {/each}
        <span class="bracket">]</span>
      </p>
    </div>

    <div class="interests">
      <p>
        <span class="comment"># What I watch</span>
      </p>
      <p>
        I like: <span class="bracket">[</span>
        <span class="string">"The Office"</span>, <span class="string">"Suits"</span>, <span class="string">"Mr. Robot"</span>
        <span class="bracket">]</span>,
      </p>
      <p>
        I watch: <span class="string">"Romcoms & Sitcoms"</span>
      </p>
    </div>

    <div class="links-section">
      <p>
        <span class="comment"># Resources</span>
      </p>
      <p>
        dotfiles: <a class="link" target="_blank" href="https://github.com/AyushmanTripathy/dots">[link]</a>,
      </p>
      <p>
        pgp-key: <a class="link" target="_blank" href="/public.txt">[link]</a>
      </p>
    </div>
  </section>

  <ShowMore hasNoMore={true}></ShowMore>
</article>

<style>
  .terminal-cmd {
    margin-bottom: 1rem;
  }

  .intro-section {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.875rem;
    line-height: 1.8;
    letter-spacing: -0.01em;
  }

  .greeting {
    margin-bottom: 1.5rem;
  }

  .prompt {
    color: #6b7280;
  }

  .echo {
    color: #9ca3af;
  }

  .output {
    color: #d1d5db;
    padding-left: 1.5rem;
    display: block;
  }

  .comment {
    color: #6b7280;
    font-style: italic;
  }

  .string {
    color: #a3a3a3;
  }

  .number {
    color: #d1d5db;
  }

  .bracket {
    color: #6b7280;
  }

  .link {
    color: #888;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
    color: #bbb;
  }

  .bio, .interests, .links-section {
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    padding-left: 0;
  }
</style>
