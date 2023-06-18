import { c as create_ssr_component, e as escape, f as each, b as add_attribute, v as validate_component } from "../../chunks/index.js";
const Home_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: 'main.svelte-mezugf{height:100vh;width:100vw;position:fixed;top:0;left:0;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);font-family:"Source Code Pro", monospace;display:flex;flex-direction:column;justify-content:center;align-items:center;background-image:url("/layer.svg");background-size:cover;background-repeat:no-repeat;background-position:center;background-color:#202020;z-index:0;color:#bbb}img.svelte-mezugf{box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);aspect-ratio:1;max-width:200px;width:40vw;border-radius:10px}p.svelte-mezugf{border-right:6px solid #bbb;animation:1000ms infinite svelte-mezugf-blink;max-width:80vw;text-align:center}@keyframes svelte-mezugf-blink{0%{border-color:#202020}20%{border-color:#bbb}80%{border-color:#bbb}100%{border-color:#202020}}',
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  $$result.css.add(css$6);
  return `<main class="svelte-mezugf"><img src="/logo.png" alt="logo" class="svelte-mezugf">
  <h1>Ayushman Tripathy</h1>
  <p class="svelte-mezugf">&gt; ${escape(text)}</p>
</main>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'main.svelte-9qxqg8{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);font-family:"Source Code Pro", monospace;padding-top:3vh;padding-bottom:3vh;border-top-left-radius:80px;border-top-right-radius:80px;background-color:#202020;color:#bbb}.para.svelte-9qxqg8{width:80vw;max-width:800px;text-align:center}div.svelte-9qxqg8{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;height:fit-content;width:90vw;max-width:500px;text-align:center}',
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<main class="svelte-9qxqg8"><h1>Hello there! 👋</h1>
  <p class="para svelte-9qxqg8">I am a ${escape((/* @__PURE__ */ new Date()).getYear() - 104)} year old self-taught full stack web developer
    and Linux enthusiast.
    I am from the small town of
    <a href="https://en.wikipedia.org/wiki/Bhawanipatna">Bhawanipatna </a>
    in Kalahandi, Odisha, India.
  </p>
  <p class="para svelte-9qxqg8">&quot;The greatest tragedy of life is&#39;nt in not reaching your goal,
    but in not having a goal to reach.&quot;
  </p>
  <p class="para svelte-9qxqg8">I am interested in
    <strong>Programming</strong>, <strong>Web Development</strong>,
    <strong>FOSS </strong> and <strong>GNU/Linux</strong>.
  </p>
  <p class="para svelte-9qxqg8">I use <strong>Arch</strong> btw!</p>
  <div id="links" class="svelte-9qxqg8"><a href="/about">Read More About Me</a> 
    <p>| </p>
    <a href="/links">Good Corners of Internet</a></div>
</main>`;
});
const Pin_svelte_svelte_type_style_lang = "";
const Projects_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'main.svelte-jfl5s8{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;background-color:#202020}.para.svelte-jfl5s8{width:80vw;max-width:800px;text-align:center}section.svelte-jfl5s8{height:fit-content;width:90vw;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr;column-gap:20px;row-gap:20px;max-width:700px}div.svelte-jfl5s8{border:3px solid #303030;border-radius:10px;padding-left:5px;padding-right:3px}div.svelte-jfl5s8:hover{border-color:rgba(4, 125, 255, 0.7960784314)}@media screen and (max-width: 500px){section.svelte-jfl5s8{grid-template-columns:1fr}}',
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titles = [], des = [];
  $$result.css.add(css$4);
  return `<main class="svelte-jfl5s8"><h1>Some of my projects.</h1>
  <section class="svelte-jfl5s8">${each(titles, (title, i) => {
    return `<div${add_attribute("id", title, 0)} class="svelte-jfl5s8"><h2${add_attribute("id", title, 0)}>${escape(title.replaceAll(/-|_/g, " "))}</h2>
        <p${add_attribute("id", title, 0)}>${escape(des[i])}</p>
      </div>`;
  })}</section>
  <p class="para svelte-jfl5s8">More on my 
    <a href="https://github.com/AyushmanTripathy/">Github</a>.
  </p>
</main>`;
});
const popup_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'main.svelte-2eksj6{display:flex;flex-direction:column;justify-content:center;align-items:center;position:fixed;top:0;left:0;height:fit-content;width:100vw;display:none;background:transparent}div.svelte-2eksj6{font-family:"Source Code Pro", monospace;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);z-index:11;width:80vw;max-width:400px;text-align:center;border-radius:10px;background-color:#303030;padding:10px}',
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { msg } = $$props;
  if ($$props.msg === void 0 && $$bindings.msg && msg !== void 0)
    $$bindings.msg(msg);
  $$result.css.add(css$3);
  return `<main id="popup" class="svelte-2eksj6"><div class="svelte-2eksj6"><p>${escape(msg)}</p></div>
</main>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'main.svelte-1nkp45k{height:120vh;width:100vw;background-image:url("/wave.svg");background-size:cover;background-repeat:no-repeat;background-position:center;display:flex;flex-direction:column;background-color:#202020;justify-content:space-between;align-items:center;padding-top:2vh}section.svelte-1nkp45k{height:fit-content;width:87vw;box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);display:flex;flex-direction:row;padding-top:10px;padding-bottom:10px;justify-content:space-evenly;align-items:center;background-color:#303030;max-width:500px;border-radius:8px}img.svelte-1nkp45k{height:50px;aspect-ratio:1}form.svelte-1nkp45k{box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);display:flex;flex-direction:column;height:70vh;width:87vw;justify-content:space-evenly;align-items:center;border-radius:8px;max-width:500px;background-color:#303030}footer.svelte-1nkp45k{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;text-align:center;color:#202020;background-color:#202020}a.svelte-1nkp45k{color:#202020}textarea.svelte-1nkp45k,input.svelte-1nkp45k{height:9%;width:80%;font-family:"Source Code Pro", monospace;font-weight:500;font-size:1.1rem;background-color:transparent;outline:none;border:none;color:#bbb}textarea.svelte-1nkp45k{height:40%;resize:none;font-size:1rem}input[type=submit].svelte-1nkp45k{box-shadow:0px 8px 16px 0px rgba(0, 0, 0, 0.3);border-radius:10px;transition:500ms}input[type=submit].svelte-1nkp45k:hover{background-color:#404040}',
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let form, msg;
  $$result.css.add(css$2);
  return `${validate_component(Popup, "Popup").$$render($$result, { msg }, {}, {})}
<main class="svelte-1nkp45k"><h1>Get in touch!</h1>
  <section class="svelte-1nkp45k"><img src="/mail.svg" alt="mail" class="svelte-1nkp45k">
    <a href="https://www.youtube.com/@ayushmantripathy1917" class="svelte-1nkp45k"><img src="/youtube.svg" alt="youtube" class="svelte-1nkp45k"></a>
    <a href="https://github.com/AyushmanTripathy/" class="svelte-1nkp45k"><img src="/github.svg" alt="github" class="svelte-1nkp45k"></a>
    <a href="https://www.hackerrank.com/ayushmantripath3" class="svelte-1nkp45k"><img src="/hackerrank.svg" alt="hackerrank" class="svelte-1nkp45k"></a></section>
  <form name="mails" form-name="mails" data-netlify="true" class="svelte-1nkp45k"${add_attribute("this", form, 0)}><input autocomplete="off" type="email" name="email" placeholder="example@mail.com" required class="svelte-1nkp45k">
    <input autocomplete="off" type="text" name="subject" placeholder="Subject" required class="svelte-1nkp45k">
    <textarea name="message" cols="30" rows="10" placeholder="Your message" required class="svelte-1nkp45k"></textarea>
    <input type="submit" value="Submit" class="svelte-1nkp45k"></form>
  <footer class="svelte-1nkp45k"><p>made with ❤ and svelte.js by @AyushmanTripathy<br>
      <a href="https://github.com/AyushmanTripathy/portfolio" class="svelte-1nkp45k">source code</a>
      |
      <a href="https://kit.svelte.dev/" class="svelte-1nkp45k">svelte </a>
      |
      <a href="https://en.wikipedia.org/wiki/Free_and_open-source_software" class="svelte-1nkp45k">FOSS</a></p></footer>
</main>`;
});
const Tech_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'main.svelte-3mpfzf{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;background-color:#202020;color:#bbb;padding-bottom:20px}section.svelte-3mpfzf{height:fit-content;width:90vw;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;max-width:500px}@media screen and (max-width: 500px){section.svelte-3mpfzf{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}}h2.svelte-3mpfzf{text-decoration:underline}div.svelte-3mpfzf{text-align:center}',
  map: null
};
const Tech = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let titles = [], contents = [];
  $$result.css.add(css$1);
  return `<main class="svelte-3mpfzf"><h1>Technologies I use,</h1>
  <section class="svelte-3mpfzf">${each(contents, (content, i) => {
    return `<div class="svelte-3mpfzf"><h2 class="svelte-3mpfzf">${escape(titles[i])}</h2>
        ${each(content, (line, x) => {
      return `<p>${escape(`${x + 1}. ${line}`)}</p>`;
    })}
      </div>`;
  })}</section>
</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-6myizp{position:absolute;top:0;left:0;height:fit-content;width:100vw;display:flex;flex-direction:column;z-index:1;color:#bbb}section.svelte-6myizp{height:100vh;width:100vw;background-color:transparent}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
<main class="svelte-6myizp"><section class="svelte-6myizp"></section>
  ${validate_component(About, "About").$$render($$result, {}, {}, {})}
  ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
  ${validate_component(Tech, "Tech").$$render($$result, {}, {}, {})}
  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
