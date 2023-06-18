import { c as create_ssr_component, e as escape, f as each, h as null_to_empty, v as validate_component } from "../../../chunks/index.js";
import { B as Backbutton } from "../../../chunks/backbutton.js";
const Home_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'main.svelte-1btc91o{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#202020;color:#bbb;text-align:center;padding-top:40vh}p.svelte-1btc91o{width:80vw;max-width:800px;text-align:center;font-family:"Source Code Pro", monospace}',
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="svelte-1btc91o"><h1>I am<br>Ayushman Tripathy.</h1>
  <p class="para svelte-1btc91o">I am a ${escape((/* @__PURE__ */ new Date()).getYear() - 104)} year old self-taught full stack web developer
    and Linux enthusiast.
    I am from the small town of
    <a href="https://en.wikipedia.org/wiki/Bhawanipatna">Bhawanipatna </a>
    in Kalahandi, Odisha, India.
  </p>
  <p class="para svelte-1btc91o">&quot;The greatest tragedy of life is&#39;nt in not reaching your goal,
    but in not having a goal to reach.&quot;
  </p>
  <p class="para svelte-1btc91o">I am interested in
    <strong>Programming</strong>, <strong>Web Development</strong>,
    <strong>FOSS </strong> and <strong>GNU/Linux</strong>.
  </p>
</main>`;
});
const Journey_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'main.svelte-gjq7k9{height:fit-content;width:100vw;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;color:#bbb;background-color:#202020;text-align:center}section.svelte-gjq7k9{height:fit-content;width:fit-content;background:linear-gradient(#404040, #404040) no-repeat center/1px 80%}.para.svelte-gjq7k9{width:80vw;max-width:800px;text-align:center}div.svelte-gjq7k9{height:fit-content;width:40vw;position:relative}.left.svelte-gjq7k9{text-align:left;left:25vw}.right.svelte-gjq7k9{text-align:right;right:25vw}@media only screen and (max-width: 450px){section.svelte-gjq7k9{background:none}.left.svelte-gjq7k9,.right.svelte-gjq7k9{text-align:center;left:0;right:0;width:80vw}}',
  map: null
};
const Journey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let months = [], notes = [];
  const isEven = (x) => x % 2 == 0;
  $$result.css.add(css$1);
  return `<main class="svelte-gjq7k9"><h1>My Journey</h1>
  <p class="para svelte-gjq7k9">I don&#39;t know where time will take me but i hope it&#39;s in the right
  direction.</p>
  <section class="svelte-gjq7k9">${each(notes, (note, i) => {
    return `<div class="${escape(null_to_empty(isEven(i) ? "left" : "right"), true) + " svelte-gjq7k9"}"><h2>${escape(months[i])}</h2>
        ${each(note, (line) => {
      return `<p>${escape(line)}</p>`;
    })}
      </div>`;
  })}</section>
  <p class="para svelte-gjq7k9">Thank you for reading my story.</p>
</main>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1v383tl{height:fit-content;width:100vw;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Backbutton, "BackButton").$$render($$result, { url: "/" }, {}, {})}
<main class="svelte-1v383tl">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
  ${validate_component(Journey, "Journey").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
