
import { GoogleGenAI, Type } from "@google/genai";

// Cross-environment safety for API key access
const getEnvApiKey = () => {
  try {
    // Check for process.env (Node/Vite) or window.process (some browser environments)
    const env = (typeof process !== 'undefined' && process.env) ? process.env : (window as any).process?.env || {};
    return env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getEnvApiKey();
const ai = new GoogleGenAI({ apiKey: apiKey });

export const getBookRecommendations = async (focus: string) => {
  if (!apiKey) {
    console.warn("CloudBook Club: Gemini API Key not found. AI recommendations are disabled.");
    return [];
  }
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

    const text = response.text;
    if (!text) return [];
    
    try {
      return JSON.parse(text);
    } catch (parseError) {
      console.error("CloudBook Club: Error parsing Gemini JSON output:", parseError);
      return [];
    }
  } catch (error) {
    console.error("CloudBook Club: Gemini recommendation error:", error);
    return [];
  }
};

export const summarizeDiscussion = async (posts: string[]) => {
  if (!apiKey) return "AI services are currently unavailable. Please configure the API Key.";
  try {
    const prompt = `Summarize the following book club discussion into a short bulleted list of key takeaways:\n\n${posts.join("\n")}`;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });
    return response.text || "No insights could be generated for this discussion.";
  } catch (error) {
    console.error("CloudBook Club: Gemini summary error:", error);
    return "Could not generate a summary at this time.";
  }
};
