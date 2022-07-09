import { getArticles } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/message/*.md")
  );

  const messages = await getArticles(files);

  const [{ url, content }] = messages;

  return {
    status: 200,
    body: {
      url,
      content,
    },
  };
}
