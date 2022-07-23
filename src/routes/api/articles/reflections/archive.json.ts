import { getArticles } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/reflecting/*.md")
  );

  const reflections = await getArticles(files);

  return {
    status: 200,
    body: reflections,
  };
}
