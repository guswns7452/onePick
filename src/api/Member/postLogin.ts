import { api } from '../axios';

// 요청 body 타입
export interface CreateLoginRequest {
    phoneNumber: string;
}

// LOGIN API
export const postLogin = async (body: CreateLoginRequest) => {
    const response = await api.post(
        `/api/v1/member/login`,
        body,
    );

    return response.data;
};

// 전화번호 로그인