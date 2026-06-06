import { api } from '../axios';

export const getProducts = async () => {
    const response = await api.get(`/api/v1/product`);

    return response.data;
};

// 펀딩 모집 목록 글 조회