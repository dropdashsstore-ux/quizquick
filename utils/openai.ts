// lib/openai.ts
import axios from "axios";

const OPENROUTER_API_KEY =
  "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";
const DEEPSEEK_MODEL = "deepseek/deepseek-r1-0528:free";

interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface GenerateQuizResponse {
  questions: QuizQuestion[];
}

// Define the OpenRouter API response shape
interface OpenRouterResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

export async function generateQuizFromText(
  text: string
): Promise<GenerateQuizResponse> {
  const prompt = `
  📚🎉 Hey amazing AI! You're the ultimate Quiz Master 🤖💡. I have some text notes 📄, and I want you to create a full quiz from them. 
  Be super detailed, super creative, and make it fun with multiple-choice questions ✅❌. 
  For each question:
  1️⃣ Write a clear question in simple language
  2️⃣ Provide 4 answer options labeled A, B, C, D
  3️⃣ Clearly indicate the correct answer
  4️⃣ Include small hints or fun facts if possible 🌟🧠
  Make sure the quiz is fully ready to be displayed on a website with a timer ⏱️. 
  Organize everything as JSON so I can parse it easily. 
  Be super long, very detailed, and extremely helpful 📝✨.
  Here are the notes to use: 
  ${text}
  `;

  const response = await axios.post<OpenRouterResponse>(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: DEEPSEEK_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 2000,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = response.data.choices?.[0]?.message?.content;

  try {
    return JSON.parse(data || "{}");
  } catch (err) {
    console.error("❌ Failed to parse quiz JSON:", err, data);
    throw new Error("Failed to generate quiz. Check the API response.");
  }
}
