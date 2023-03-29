<script>
  import Popup from "../_common/popup.svelte";
  import { onMount } from "svelte";
  let form, show = false, msg;

  function copyMail() {
    const text = "ayushmantripathy2004@gmail.com";
    navigator.clipboard.writeText(text).then(() => {
      showPopup("mail copied to clipboard.")
    }, (err) => {
      showPopup("couldn't copy mail to clipboard.")
      console.error('Async: Could not copy text: ', err);
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const email = e.path[0][0].value;
    const subject = e.path[0][1].value;
    const body = `From ${email}%0A${e.path[0][2].value}`;
    window.open(
    `mailto:ayushmantripathy2004@gmail.com?subject=${subject}&body=${body}`);
  }
  function showPopup(s) {
    msg = s;
    show = true;
    const ele = document.querySelector("#popup"), time = 5;
    ele.style.display = "flex"
    ele.style.animation = time + "s ease-in slidedown";
    setTimeout(() => {
      ele.style.display = "none";
    },time * 1000)
  }
</script>

<Popup msg={msg}/>
<main>
  <h1>Get in touch!</h1>
  <section>
    <img src="/mail.svg" on:click={copyMail} alt="mail">
    <a href="https://www.youtube.com/@ayushmantripathy1917">
      <img src="/youtube.svg" alt="youtube">
    </a>
    <a href="https://github.com/AyushmanTripathy/">
      <img src="/github.svg" alt="github">
    </a>
    <a href="https://www.hackerrank.com/ayushmantripath3">
      <img src="/hackerrank.svg" alt="hackerrank">
    </a>
  </section>
  <form bind:this={form} on:submit={handleSubmit} 
    name="mails" form-name="mails" data-netlify="true">
    <input
      autocomplete="off"
      type="email"
      name="email"
      placeholder="example@mail.com"
      required
    />
    <input
      autocomplete="off"
      type="text"
      name="subject"
      placeholder="Subject"
      required
    />
    <textarea
      name="message"
      cols="30"
      rows="10"
      placeholder="Your message"
      required
    ></textarea>
    <input type="submit" value="Submit" />
  </form>
  <footer>
    <p>
      made with ❤ and svelte.js by @AyushmanTripathy<br>
      <a href="https://github.com/AyushmanTripathy/portfolio"> source code</a>
      |
      <a href="https://kit.svelte.dev/"> svelte </a>
      |
      <a
      href="https://en.wikipedia.org/wiki/Free_and_open-source_software">FOSS</a>
    </p>
  </footer>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include section(140vh,100vw);
    @include cover("/wave.svg");
    @include flex(column);
    background-color: $pri;
    justify-content: space-between;
    align-items: center;
    padding-top: 2vh;
  }
  $width: 87vw;
  section {
    @include section(fit-content,$width);
    @include shadow;
    @include flex(row);

    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-evenly;
    align-items: center;
    background-color: $sec;
    max-width: 500px;
    border-radius: 8px;
  }
  img {
    height: 50px;
    aspect-ratio: 1;
  }
  form {
    @include shadow;
    @include flex(column);
    @include section(90vh,$width);
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    max-width: 500px;
    background-color: $sec;
  }
  footer {
    @include section(fit-content,100vw);
    @include flex(column);
    @include flex-center;
    @include mono;
    text-align:center;
    color: $pri;
    background-color: $pri;
  }
  a {
    color: $pri;
  }
  textarea, input {
    @include section(9%,80%);
    @include mono;
    font-weight: 500;
    font-size: 1.1rem;
    background-color: transparent;
    outline: none;
    border: none;
    color: $light;
  }
  textarea {
    height: 40%;
    resize: none;
    font-size: 1rem;
  }
  input[type="submit"] {
    @include shadow;
    border-radius: 10px;
    transition: 500ms;
    &:hover {
      background-color: $tri;
    }
  }
</style>
