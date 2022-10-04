export async function load({ fetch }) {
  const response = await fetch("/api/articles.json");
  const articles = await response.json();
  const { messages, reflections, instructor, students } = articles;

  return {
    messages, reflections, instructor, students
  };
}
