import { api } from '../axios';

export const postApplyFunding = async (productId: number) => {
    const response = await api.post(`/api/v1/product/${productId}/fundings`);

    return response.data;
};

// 펀딩 참여