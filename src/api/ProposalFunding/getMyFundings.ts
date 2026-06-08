import { api } from '../axios';

export const getMyFundings = async () => {
    const response = await api.get(`/api/v1/proposals/fundings/me`);

    return response.data;
};

// 내 입찰 목록 조회