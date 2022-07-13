// TODO rename to list (not really an archive)
import { getArticles } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/message/*.md")
  );

  const messages = await getArticles(files);

  return {
    status: 200,
    body: messages,
  };
}
