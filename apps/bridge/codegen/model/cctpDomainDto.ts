/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { ChainDto } from './chainDto';
import type { CctpContractAddressesDto } from './cctpContractAddressesDto';

export interface CctpDomainDto {
  chain: ChainDto;
  chainId: number;
  contractAddresses: CctpContractAddressesDto;
  createdAt: string;
  domain: number;
  duration: number;
  id: string;
}
