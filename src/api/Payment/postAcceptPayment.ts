import { api } from '../axios';

// 요청 body 타입
export interface CreateAcceptPaymentRequest {
    proposalFundingId: number;
    paymentType: string;
    pgPaymentKey: string;
}

// POST API
export const postAcceptPayment = async (body: CreateAcceptPaymentRequest) => {
    const response = await api.post(
        `/api/v1/payments/proposals`,
        body
    );

    return response.data;
};

// 제작 제안 수락 시 결제