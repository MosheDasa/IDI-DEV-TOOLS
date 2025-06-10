export interface FavoriteItem {
    id: string;
    name: string;
    role: string;
}

export interface AutoCompleteOption {
    value: string;
}

export interface GeminiApiResponsePart {
    text: string;
}

export interface GeminiApiContent {
    parts?: GeminiApiResponsePart[];
}

export interface GeminiApiCandidate {
    content?: GeminiApiContent;
}

export interface GeminiApiResult {
    candidates?: GeminiApiCandidate[];
} 