/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { ConfirmationDto } from './confirmationDto';
import type { CctpTransactionType } from './cctpTransactionType';

export interface CctpBridgeDto {
  amount: string;
  bridge: ConfirmationDto;
  createdAt: string;
  duration: number;
  fromChainId: number;
  id: string;
  recipient: string;
  relay?: ConfirmationDto;
  sender: string;
  toChainId: number;
  token: string;
  type: CctpTransactionType;
  updatedAt: string;
}
