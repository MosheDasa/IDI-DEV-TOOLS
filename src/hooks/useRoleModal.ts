import { useState } from 'react';

interface GeminiApiResponsePart {
    text: string;
}

interface GeminiApiContent {
    parts?: GeminiApiResponsePart[];
}

interface GeminiApiCandidate {
    content?: GeminiApiContent;
}

interface GeminiApiResult {
    candidates?: GeminiApiCandidate[];
}

export const useRoleModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openModal = async (roleText: string): Promise<void> => {
        setIsModalOpen(true);
        setModalContent('');
        setIsLoading(true);

        const prompt: string = `Please expand on the role of '${roleText}' providing a detailed job description including key responsibilities and required skills. Respond in Hebrew.`;

        let chatHistory: Array<{ role: string; parts: Array<{ text: string }> }> = [];
        chatHistory.push({ role: "user", parts: [{ text: prompt }] });
        const payload: { contents: Array<{ role: string; parts: Array<{ text: string }> }> } = { contents: chatHistory };
        const apiKey: string = ""; // Canvas תספק אוטומטית את מפתח ה-API בזמן ריצה

        try {
            const apiUrl: string = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const response: Response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result: GeminiApiResult = await response.json();

            setIsLoading(false);

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const generatedText = result.candidates[0].content.parts[0].text;
                setModalContent(generatedText.replace(/\n/g, '<br>'));
            } else {
                setModalContent('שגיאה: לא התקבלה תגובה חוקית מה-API. נסה שוב מאוחר יותר.');
                console.error('Unexpected API response structure:', result);
            }
        } catch (error: any) {
            setIsLoading(false);
            setModalContent('שגיאה: אירעה שגיאה בעת שליחת הבקשה. וודא שאתה מחובר לאינטרנט ונסה שוב.');
            console.error('Error calling Gemini API:', error);
        }
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return {
        isModalOpen,
        modalContent,
        isLoading,
        openModal,
        closeModal
    };
}; 