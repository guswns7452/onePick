import { api } from '../axios';

// 요청 body 타입
export interface CreatePostRequest {
    title: string;
    content: string;
    category: string;
    maxPrice: number;
    deadlineDays: number;
}

// POST API
export const postProposal = async (body: CreatePostRequest) => {
    const response = await api.post(
        `/api/v1/proposals`,
        body,
    );

    return response.data;
};

// 구매 요청 글 작성