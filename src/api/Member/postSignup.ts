import { api } from '../axios';

// 요청 body 타입
export interface CreateSignupRequest {
    name: string;
    nickname: string;
    address: string;
    phoneNumber: string;
    type: string;
}

// LOGIN API
export const postSignup = async (body: CreateSignupRequest) => {
    const response = await api.post(
        `/api/v1/member/signup`,
        body,
    );

    return response.data;
};

// 회원가입