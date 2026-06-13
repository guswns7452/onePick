// api/ProductPrice/productPriceApi.ts
// AI 상품 가격 책정 API

import { api } from '../axios';

// POST /api/v1/ai/product-price/jobs
export interface ProductPriceJobRequest {
    name:      string;
    cost:      number;
    design:    string;
    materials: string;
    usage:     string;
}

export interface ProductPriceJobResponse {
    productId: number;
    jobId:     string;
    status:    string;
    message:   string;
}

export interface ProductPriceJobResult {
    jobId:       string;
    status:      'QUEUED' | 'RUNNING' | 'SUCCESS' | 'FAILED';
    price:       number | null;
    description: string | null;
    productId:   number | null;

    jobId:     string;
    status:    'QUEUED' | 'RUNNING' | 'SUCCESS' | 'FAILED';
    productId: number | null;
    result: {
        price:           number | null;
        description:     string | null;
        inferenceTimeSec: number | null;
    } | null;
}

// AI 추론 요청
export const postProductPriceJob = async (body: ProductPriceJobRequest): Promise<ProductPriceJobResponse> => {
    const response = await api.post('/api/v1/ai/product-price/jobs', body);
    return response.data.data;
};

// AI 작업 상태 조회 (polling용)
export const getProductPriceJob = async (jobId: string): Promise<ProductPriceJobResult> => {
    const response = await api.get(`/api/v1/ai/product-price/jobs/${jobId}`);
    return response.data.data;
};
