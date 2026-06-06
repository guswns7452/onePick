import { api } from '../axios';

export const deleteProposal = async (proposalId: number) => {
    const response = await api.delete(`/api/v1/proposals/${proposalId}`);

    return response.data;
};

// 구매 요청 글 삭제