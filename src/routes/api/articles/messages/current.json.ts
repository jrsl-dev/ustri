// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/message/*.md")
  );

  const messages = await Promise.all(
    files.map(async ([path, resolver]) => {
      const url = path.slice(8, -3);

      const results = await resolver();
      return { url, ...results.metadata, ...results.default };
    })
  );

  messages.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [{ render, url }] = messages;

  return {
    status: 200,
    body: {
      url,
      content: render(),
    },
  };
}
