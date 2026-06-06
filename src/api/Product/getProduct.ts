import { api } from '../axios';

export const getProduct = async (productId: number) => {
    const response = await api.get(`/api/v1/product/${productId}`);

    return response.data;
};

// 펀딩 모집 목록 글 조회