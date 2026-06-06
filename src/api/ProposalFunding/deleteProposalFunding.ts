import { api } from '../axios';

export const deleteProposalFunding = async (proposalFundingId: number) => {
    const response = await api.delete(`/api/v1/proposals/fundings/${proposalFundingId}`);

    return response.data;
};

// 입찰 요청 취소