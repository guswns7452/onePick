// src/interface/bid.ts

export interface bid {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    createdAt: any;
    deadlineDays: number;
    price: number;
    thumbnail: any;
    buttonView: () => void;
    onPressNav: () => void;
};