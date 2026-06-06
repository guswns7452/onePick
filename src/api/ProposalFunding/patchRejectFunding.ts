import { api } from '../axios';

export const patchRejectFunding = async (proposalFundingId: number) => {
    const response = await api.patch(`/api/v1/product/${proposalFundingId}/accept`);

    return response.data;
};

// 입찰 요청 거절