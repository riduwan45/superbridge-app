/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * API
 * API docs
 * OpenAPI spec version: 1.0
 */
import type { ChainDto } from './chainDto';
import type { HyperlaneMailboxDto } from './hyperlaneMailboxDto';
import type { HyperlaneCustomWarpRouteFileResponseDtoTokensItem } from './hyperlaneCustomWarpRouteFileResponseDtoTokensItem';

export interface HyperlaneCustomWarpRouteFileResponseDto {
  chains: ChainDto[];
  mailboxes: HyperlaneMailboxDto[];
  tokens: HyperlaneCustomWarpRouteFileResponseDtoTokensItem[];
}
