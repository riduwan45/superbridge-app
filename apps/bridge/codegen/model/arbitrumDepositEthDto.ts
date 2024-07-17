/**
 * Generated by orval v6.30.2 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { ConfirmationDto } from './confirmationDto';
import type { ArbitrumDepositEthDtoMetadata } from './arbitrumDepositEthDtoMetadata';
import type { ArbitrumTransactionType } from './arbitrumTransactionType';

export interface ArbitrumDepositEthDto {
  createdAt: string;
  deploymentId: string;
  deposit: ConfirmationDto;
  id: string;
  l2TransactionHash: string;
  metadata: ArbitrumDepositEthDtoMetadata;
  relay?: ConfirmationDto;
  type: ArbitrumTransactionType;
  updatedAt: string;
}
