import { getArticles } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/reflecting/*.md")
  );

  const reflections = await getArticles(files);

  const [{ url, content }] = reflections;

  return {
    status: 200,
    body: {
      url,
      content,
    },
  };
}
