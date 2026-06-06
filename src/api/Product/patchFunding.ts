import { api } from '../axios';

export const patchFunding = async (productId: number) => {
    const response = await api.patch(`/api/v1/product/${productId}/finish`);

    return response.data;
};

// 펀딩 모집 조기 종료