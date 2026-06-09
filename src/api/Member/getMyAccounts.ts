import { api } from '../axios';

export const getMyAccounts = async () => {
    const response = await api.get(`/api/v1/member/account/me`);

    return response.data;
};

// 내 계좌, 카드 목록 조회