import { getDefaultConfig, getDefaultWallets } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { okxWallet, safeWallet } from "@rainbow-me/rainbowkit/wallets";
import { useMemo } from "react";
import { fallback, http } from "wagmi";
import { Chain, mainnet } from "wagmi/chains";

import { ChainDto } from "@/codegen/model";
import { chainIcons } from "@/config/chain-icon-overrides";
import { useMetadata } from "@/hooks/use-metadata";

import { useIsSuperbridge } from "../apps/use-is-superbridge";
import { useAllDeployments } from "../deployments/use-all-deployments";
import { useAllChains } from "../use-chains";

export function useWagmiConfig() {
  const chains = useAllChains();
  const allDeployments = useAllDeployments();
  const metadata = useMetadata();
  const isSuperbridge = useIsSuperbridge();

  return useMemo(() => {
    // Rainbowkit doesn't like no chains
    if (chains.length === 0) {
      chains.push(mainnet as unknown as ChainDto);
    }

    const chainsWithIcons: Chain[] = chains.map((c) => {
      // if (c.id === 1) {
      //   // @ts-expect-error
      //   (c as Chain).fees = {
      //     baseFeeMultiplier: 1.1,
      //   };
      // }

      if (chainIcons[c.id]) {
        if (c.name === "Molten") {
          // @ts-expect-error
          c.iconUrl = "/img/networks/molten.svg";
        } else {
          // @ts-expect-error
          c.iconUrl = chainIcons[c.id];
        }
      } else {
        const d = allDeployments.find((x) => x.l2ChainId === c.id);
        if (d?.rollupNetworkIcon) {
          // @ts-expect-error
          c.iconUrl = d.rollupNetworkIcon;
        }
      }
      return c as unknown as Chain;
    });

    const transports = chainsWithIcons.reduce(
      (accum, chain) => ({
        ...accum,
        [chain.id]: fallback(
          chain.rpcUrls.default.http.map((url) => http(url))
        ),
      }),
      {}
    );

    const { wallets } = getDefaultWallets();

    if (
      isSuperbridge ||
      (allDeployments.length === 1 &&
        allDeployments[0].name === "camp-network-4xje7wy105")
    ) {
      wallets[0].wallets.push(okxWallet);
    }

    return getDefaultConfig({
      appName: metadata.head.title,
      appDescription: metadata.head.description,
      appIcon: metadata.head.favicon,
      projectId: "50c3481ab766b0e9c611c9356a42987b",
      // @ts-expect-error
      chains,
      transports,
      ssr: true,
      wallets: [...wallets, { groupName: "More", wallets: [safeWallet] }],
    });
  }, [chains, allDeployments, metadata]);
}
