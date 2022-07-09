// TODO typescript this
export async function get() {
  const files = Object.entries(
    import.meta.glob("../../../articles/reflecting/*.md")
  );

  const messages = await Promise.all(
    files.map(async ([path, resolver]) => {
      const url = path.slice(8, -3);
      const results = await resolver();
      const content = results.default.render();
      return { url, ...results.metadata, content };
    })
  );

  messages.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const [{ url, content }] = messages;

  return {
    status: 200,
    body: {
      url,
      content,
    },
  };
}
