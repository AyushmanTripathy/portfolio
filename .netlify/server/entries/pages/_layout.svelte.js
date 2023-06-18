import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-uzb868{position:fixed;top:0;left:0;height:3px;width:0;background-color:rgba(4, 125, 255, 0.7960784314);transition:width 500ms;z-index:10}#pointer.svelte-uzb868{position:fixed;top:20px;left:20px;z-index:10;transform:rotate(-90deg);transition:180ms}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pointer, scrollFactor;
  $$result.css.add(css);
  return `<div style="${"width:" + escape(scrollFactor * 100, true) + "vw;"}" class="svelte-uzb868"></div>
<img id="pointer" src="/pointer.svg" alt="pointer" class="svelte-uzb868"${add_attribute("this", pointer, 0)}>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
