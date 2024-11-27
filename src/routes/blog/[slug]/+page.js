// @ts-nocheck
import blogs from "$lib/blog.json";
import { error } from "@sveltejs/kit";

const ids = blogs.map((x) => x.id);

export function load({ params }) {
  const index = ids.indexOf(params.slug);
  if (index == -1) throw error(404);

  return {
    index,
    blogs,
  };
}
