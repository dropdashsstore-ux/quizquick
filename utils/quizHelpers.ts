// quizHelpers.ts
import { supabase } from "./supabase"

export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  answer: string
}

export async function getAllQuizzes(): Promise<QuizQuestion[]> {
  const { data, error } = await supabase
    .from("quizzes") // 👈 your table name in Supabase
    .select("*")

  if (error) {
    console.error("Error fetching quizzes:", error.message)
    return []
  }

  return data as QuizQuestion[]
}

export async function getQuizById(id: number): Promise<QuizQuestion | null> {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching quiz:", error.message)
    return null
  }

  return data as QuizQuestion
}

export async function saveQuizResult(
  userId: string,
  quizId: number,
  score: number
) {
  const { error } = await supabase.from("results").insert([
    {
      user_id: userId,
      quiz_id: quizId,
      score,
      created_at: new Date(),
    },
  ])

  if (error) {
    console.error("Error saving result:", error.message)
    return false
  }

  return true
}
