import { api } from '../axios';

// 요청 body 타입
export interface CreateApplyRequest {
    content: string;
    price: number;
}

// POST API
export const postApplyFunding = async (productId: number, body: CreateApplyRequest) => {
    const response = await api.post(
        `/api/v1/product/${productId}/fundings`,
        body
    );

    return response.data;
};

// 펀딩 참여