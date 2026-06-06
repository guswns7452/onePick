import { api } from '../axios';

export const deleteProduct = async (productId: number) => {
    const response = await api.delete(`/api/v1/product/${productId}`);

    return response.data;
};

// 펀딩 모집 글 삭제