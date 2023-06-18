import { c as create_ssr_component, v as validate_component, f as each, e as escape, b as add_attribute } from "../../../chunks/index.js";
import { B as Backbutton } from "../../../chunks/backbutton.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'main.svelte-1m51alc{height:fit-content;width:100vw;position:absolute;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;font-family:"Source Code Pro", monospace;min-height:100vh;background-color:#202020;color:#bbb}h1.svelte-1m51alc{border-bottom:1px solid rgba(4, 125, 255, 0.7960784314)}p.svelte-1m51alc{width:80vw;max-width:800px;text-align:center}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let headings = [], names = [], links = [];
  $$result.css.add(css);
  return `${validate_component(Backbutton, "BackButton").$$render($$result, { url: "/" }, {}, {})}
<main class="svelte-1m51alc"><h1 class="svelte-1m51alc">My Links</h1>
  <p class="svelte-1m51alc">Explore some good corners of internet.</p>

  ${each(headings, (heading, i) => {
    return `<p class="svelte-1m51alc"><strong>${escape(heading)}</strong></p>
    ${each(links[i], (link, x) => {
      return `<a${add_attribute("href", link, 0)}>${escape(names[i][x])}</a>`;
    })}`;
  })}
</main>`;
});
export {
  Page as default
};
