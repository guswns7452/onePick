import { api } from '../axios';

export const patchProductionComplete = async (orderId: number) => {
    const response = await api.patch(`/api/v1/order/${orderId}/production-complete`);

    return response.data;
};
