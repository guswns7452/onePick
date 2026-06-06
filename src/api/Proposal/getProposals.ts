import { api } from '../axios';

export const getProposals = async () => {
    const response = await api.get(`/api/v1/proposals`);

    return response.data;
};

// 구매 요청 글 목록 조회