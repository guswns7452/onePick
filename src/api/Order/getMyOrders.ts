import { api } from '../axios';
import { ProposalOrder } from '../../interface/order';

export const getMyOrders = async (): Promise<ProposalOrder[]> => {
    const response = await api.get('/api/v1/order');
    const body = response.data;

    if (Array.isArray(body)) {
        return body;
    }
    if (Array.isArray(body?.data)) {
        return body.data;
    }
    return [];
};
