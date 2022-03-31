import adapter from "@sveltejs/adapter-netlify";
import proprocess from "svelte-preprocess";

const config = {
  preprocess: proprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
