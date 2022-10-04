export async function fetchArticles() {
  const allPostFiles = import.meta.glob("/src/routes/articles/**/*.md");
  const iterablePosts = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const url = path.replace("/src/routes", "").replace(".md", "");

      return {
        ...metadata,
        url,
      };
    })
  );

  return allPosts;
}

export function getCategory(category) {
  return (article) => new RegExp(category, "i").test(article.category);
}
