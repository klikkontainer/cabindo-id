import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: In a real production app, usage of process.env.API_KEY is correct for build-time env vars or server-side.
// For this demo, we assume the environment is set up correctly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendChatMessage = async (history: string, newMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "Maaf, sistem chat sedang dalam pemeliharaan (API Key missing). Silahkan hubungi kami via WhatsApp.";
    }

    const systemInstruction = `
      Anda adalah asisten virtual cerdas untuk 'Cabindo' (PT NIAGA KONSTRUKSI CABINDO).
      Tugas anda adalah membantu calon klien yang mengunjungi website kami.
      
      Informasi Perusahaan:
      - Kami adalah kontraktor spesialis Bangunan Modular dan Modifikasi Kontainer.
      - Layanan kami: Office Container, Mess Pekerja, Toilet Container, Klinik Modular, Cafe Container.
      - Keunggulan: Cepat bangun, tahan gempa, mudah dipindahkan (portable), harga kompetitif.
      - Lokasi: Jakarta, Indonesia (melayani seluruh Indonesia).
      
      Gaya Bahasa:
      - Profesional, ramah, dan membantu.
      - Gunakan Bahasa Indonesia yang baik.
      - Jika ditanya harga spesifik, berikan kisaran kasar dan sarankan untuk "Minta Penawaran" resmi melalui kontak WhatsApp atau Email kami untuk detail akurat.
      - Jangan mengarang proyek fiktif yang tidak masuk akal.
      
      Jawablah pertanyaan pengguna dengan ringkas dan jelas.
    `;

    const model = "gemini-2.5-flash";
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        {
            role: 'user',
            parts: [{ text: `Context History:\n${history}\n\nUser Question: ${newMessage}` }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Mohon maaf, terjadi kesalahan koneksi. Silakan coba lagi nanti.";
  }
};
