import { getArticles } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/student-views/*.md")
  );

  const articles = await getArticles(files);

  return {
    status: 200,
    body: articles,
  };
}
