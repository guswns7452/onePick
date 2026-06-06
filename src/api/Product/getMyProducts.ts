import { api } from '../axios';

export const getMyProducts = async () => {
    const response = await api.get(`/api/v1/product/me`);

    return response.data;
};

// 내 펀딩 모집 글 목록 조회