import { api } from '../axios';

export const postProposalFunding = async (proposalId: number) => {
    const response = await api.get(`/api/v1/proposals/${proposalId}/fundings`);

    return response.data;
};

// 입찰 요청 목록 조회