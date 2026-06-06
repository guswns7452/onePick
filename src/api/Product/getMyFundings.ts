import { api } from '../axios';

export const getMyFundings = async () => {
    const response = await api.get(`/api/v1/product/fundings/me`);

    return response.data;
};

// 내 펀딩 참여 목록 조회