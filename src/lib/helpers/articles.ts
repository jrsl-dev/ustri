export async function getArticles(files) {
  const articles = await Promise.all(
    files.map(async ([path, resolver]) => {
      const url = path.slice(8, -3);
      const results = await resolver();
      const content = results.default.render();
      return { url, ...results.metadata, content };
    })
  );

  articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return articles;
}
