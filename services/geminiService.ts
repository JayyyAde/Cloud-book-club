
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBookRecommendations = async (focus: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Recommend 3 African books for a book club focused on "${focus}". Provide the response as JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              author: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "author", "description"]
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return [];
  }
};

export const summarizeDiscussion = async (posts: string[]) => {
  try {
    const prompt = `Summarize the following book club discussion into a short bulleted list of key takeaways:\n\n${posts.join("\n")}`;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini summary error:", error);
    return "Could not summarize at this time.";
  }
};
