import adapter from "@sveltejs/adapter-netlify";
import proprocess from "svelte-preprocess";

const config = {
  preprocess: proprocess({
    scss: {
    }
  }),
	kit: {
		adapter: adapter()
	}
};

export default config;
