import blogs from "$lib/content/blog.json";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    error(404, "Blog not found");
  }

  return {
    blog
  };
};
