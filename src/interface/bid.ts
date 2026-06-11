// src/interface/bid.ts

import { BidCategory } from "../public/screen/BidCard";

export interface bid {
    id: number;
    title: string;
    category: BidCategory;
    valueString: string;
    thumbnail: any;
    remainingDeadlineDays: number;
    buttonView: React.ReactNode;
    onPressNav: () => void;
};