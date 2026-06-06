import { api } from '../axios';

export const getProposal = async (proposalId: number) => {
    const response = await api.get(`/api/v1/proposals/${proposalId}`);

    return response.data;
};

// 구매 요청 글 조회