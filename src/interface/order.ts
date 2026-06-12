import { BidCategory } from '../public/screen/BidCard';

export type OrderStatus =
  | 'PRODUCTION'
  | 'PRODUCTION_DONE'
  | 'SHIPPING'
  | 'DELIVERED';

export interface ProposalOrder {
  orderId: number;
  orderStatus: OrderStatus;
  paymentAmount: number;
  proposalId: number;
  proposalTitle: string;
  proposalContent?: string;
  proposalCategory: BidCategory;
  maxPrice?: number;
  proposalStatus?: string;
  writerNickname?: string;
  createdAt?: string;
  remainingDeadlineDays?: number | null;
  deadlineDays?: number;
  fundingCount?: number;
  thumbnail?: { imageUrl: string } | null;
  proposalFundingId?: number;
  proposalFundingPrice?: number;
}
