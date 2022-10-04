import { fetchArticles, getCategory } from "$lib/utils";
import { json } from "@sveltejs/kit";

export async function GET() {
  const allPosts = await fetchArticles();

  const sorted = allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const messages = sorted.filter(
    getCategory("Message from the Head Instructor")
  );
  const reflections = sorted.filter(getCategory("Reflecting Pool"));
  const instructor = sorted.filter(getCategory("Instructor Forum"));
  const students = sorted.filter(getCategory("Student Views"));

  return json({ messages, reflections, instructor, students });
}
