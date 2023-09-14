export async function getQuizzes() {
  try {
    const res = await fetch("https://opentdb.com/api.php?amount=10");
    if (!res.ok) {
      throw new Error("Failed to fetch quizzes");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
}
