import { GoogleGenAI } from "@google/genai";
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    console.log("Generating outside...");
    let res = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts: [{ text: "A grand fantasy RPG Merchant's Guild building exterior, medieval architecture, wooden signs, bustling street, cinematic lighting, highly detailed concept art, 4k" }] },
      config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
    });
    fs.writeFileSync(`public/guild-outside.jpg`, Buffer.from(res.candidates[0].content.parts[0].inlineData.data, 'base64'));
    
    console.log("Generating inside...");
    res = await ai.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: { parts: [{ text: "Inside a fantasy RPG Merchant's Guild, a welcoming wooden reception desk, warm tavern lighting, medieval fantasy concept art, first person view" }] },
      config: { imageConfig: { aspectRatio: "16:9", imageSize: "1K" } }
    });
    fs.writeFileSync(`public/guild-inside.jpg`, Buffer.from(res.candidates[0].content.parts[0].inlineData.data, 'base64'));
    console.log("Done!");
  } catch (e) {
    console.error(e);
  }
}
main();
