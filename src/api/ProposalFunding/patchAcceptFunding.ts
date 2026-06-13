import { api } from '../axios';

export const patchAcceptFunding = async (proposalFundingId: number) => {
    const response = await api.patch(`/api/v1/proposals/fundings/${proposalFundingId}/accept`);

    return response.data;
};

// 입찰 요청 수락