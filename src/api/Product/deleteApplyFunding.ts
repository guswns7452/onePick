import { api } from '../axios';

export const deleteApplyFunding = async (productId: number) => {
    const response = await api.delete(`/api/v1/product/${productId}/fundings`);

    return response.data;
};

// 펀딩 참여 취소