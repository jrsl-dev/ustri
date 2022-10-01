import { getCurrent } from "$lib/helpers/articles";

// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/reflecting/*.md")
  );

  const { content } = await getCurrent(files);

  return {
    status: 200,
    body: {
      content,
    },
  };
}
