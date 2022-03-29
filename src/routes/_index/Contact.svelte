<main>
  <h1>Get in touch!</h1>
  <section>
    <a href="https://youtu.be/dQw4w9WgXcQ">
      <img src="/youtube.svg" alt="youtube">
    </a>
    <a href="https://github.com/AyushmanTripathy/">
      <img src="/github.svg" alt="github">
    </a>
    <a href="https://www.hackerrank.com/ayushmantripath3">
      <img src="/hackerrank.svg" alt="hackerrank">
    </a>
  </section>
  <form name="mails" action="POST" data-netlify="true">
    <input
      autocomplete="off"
      type="text"
      name="name"
      placeholder="Your name"
      required
    />
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
      made with ❤ and svelte.js <br>
      <a href="https://github.com/AyushmanTripathy/portfolio"> source code</a>
      |
      <a href="http://motherfuckingwebsite.com/"> minimal version </a>
    </p>
  </footer>
</main>

<style lang="scss">
  @import "../../app.scss";
  main {
    @include section(140vh,100vw);
    @include cover("/wave.svg");
    @include flex(column);
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
