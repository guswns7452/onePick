import { api } from '../axios';

export const getMyProposals = async () => {
    const response = await api.get(`/api/v1/proposals/me`);

    return response.data;
};

// 내 구매 요청 글 목록 조회