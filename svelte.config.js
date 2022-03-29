import adapter from "@sveltejs/adapter-netlify";
import proprocess from "svelte-preprocess";

const config = {
  preprocess: proprocess({
    scss: {
    }
  }),
	kit: {
		adapter: adapter(),
    prerender: {
			crawl: true,
			enabled: true,
			onError: "continue",
      entries: ["*"],
		}
	}
};

export default config;
