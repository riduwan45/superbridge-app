import Image from "next/image";
import Link from "next/link";

import {
  IconArrowUpRight,
  IconBackground,
  IconColor,
  IconDarkmode,
  IconFonts,
  IconLogo,
  LogoElixr,
  LogoFlow,
  LogoMolten,
  LogoOwl,
  LogoRenzo,
  StickerCode,
  StickerComputer,
  StickerDomain,
  StickerHyperlane,
  StickerLink,
  StickerPeace,
  StickerSB,
  StickerSparkle,
  StickerTerms,
} from "../icons";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function HLContent() {
  return (
    <>
      <div className="max-w-[1000px] mx-auto">
        <section className="mx-auto w-full max-w-[720px] mb-12 relative">
          <div className="flex justify-center items-center md:absolute md:inset-0">
            <StickerHyperlane className="md:absolute top-0 left-0 rotate-[-18deg] drop-shadow-sm h-9 md:h-11 w-auto" />
            <StickerSparkle className="-mx-1 md:absolute bottom-0 right-0 rotate-[20deg] drop-shadow-sm" />
            <StickerSB className="-mx-1 md:absolute top-0 right-0 rotate-[18deg] drop-shadow-sm" />
            <StickerPeace className="-mx-1 md:absolute bottom-0 left-0 rotate-[-24deg] drop-shadow-sm" />
          </div>
          <div className="flex flex-col gap-3 md:gap-6 px-0 py-6 md:p-12 pb-0 md:pb-0">
            <h2 className="text-3xl md:text-5xl text-center font-heading leading-tight md:leading-tight">
              Superbridge for your Hyperlane Token
            </h2>
            <p className="md:text-lg font-body  text-center text-pretty">
              Get the same smooth UX that users love, for your Hyperlane Warp
              Route enabled tokens. Fully white-labelled. From first timers to
              whales, people love Superbridge!
            </p>
            <Button
              size={"lg"}
              className="mx-auto px-6 mt-4 relative z-50 "
              asChild
            >
              <Link href="https://dashboard.superbridge.app/register">
                Get Superbridge
              </Link>
            </Button>
          </div>
        </section>

        <div className="flex flex-col gap-4">
          <section className="flex flex-col gap-8 rounded-3xl bg-card p-6 md:p-10">
            <h3 className="text-lg font-heading text-center leading-none">
              Super teams use Superbridge
            </h3>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center "> */}
            <div className="flex flex-wrap gap-6 md:gap-10 items-center justify-center opacity-80">
              <LogoElixr className="w-auto max-h-6 md:max-h-10" />

              <LogoRenzo className="w-auto max-h-6 md:max-h-10" />

              <LogoMolten className="w-auto max-h-6 md:max-h-10" />

              <LogoOwl className="w-auto max-h-6 md:max-h-10" />

              <LogoFlow className="w-auto max-h-6 md:max-h-10" />
            </div>
          </section>
          <section className="rounded-3xl backdrop-blur-md bg-card flex flex-col md:flex-row gap-12">
            <div className="flex flex-col gap-4 w-full p-6 md:p-10">
              <h3 className="text-2xl md:text-4xl font-heading leading-tight md:leading-tight">
                Launch your own Superbridge in minutes
              </h3>
              <p className="font-heading text-muted-foreground leading-snug">
                Simply import Hyperlane Warp Routes and begin your expansion.
              </p>
            </div>
            <div className="w-full pt-6 md:pt-10">
              <Image
                src={"/img/hyperlane/routes.png"}
                alt={"Hyperlane Warp Routes as shown in Superbridge Admin"}
                width={420}
                height={288}
                sizes="100vw"
                className="w-full h-auto max-w-[512px]"
              />
            </div>
          </section>
          <section className="rounded-3xl backdrop-blur-md bg-card pt-12 pb-0 overflow-hidden relative flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-4 px-6 md:px-10">
              <h3 className="text-2xl md:text-4xl font-heading leading-tight md:leading-tight text-center max-w-[640px]">
                Customize your bridge with a super clean custom theme
              </h3>
              <ul className="flex flex-wrap gap-2 items-center justify-center px-8">
                <li className="flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm">
                  <IconLogo className="h-4 w-auto" />
                  Logo
                </li>
                <li className="flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm">
                  <IconFonts className="h-4 w-auto" />
                  Fonts
                </li>
                <li className="flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm">
                  <IconColor className="h-4 w-auto" />
                  Colors
                </li>
                <li className="flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm">
                  <IconBackground className="h-4 w-auto" />
                  Background
                </li>
                <li className="flex gap-1 items-center rounded-full bg-muted pr-3 pl-2 py-1 text-sm">
                  <IconDarkmode className="h-4 w-auto" />
                  Darkmode
                </li>
              </ul>
            </div>

            <div className="bg-card h-12 absolute z-10 w-full left-0 -bottom-8 mix-blend-multiply blur-xl"></div>

            <Carousel
              opts={{
                align: "center",
                loop: true,
                // dragFree: true,
              }}
              className="w-full -mb-0.5"
            >
              <CarouselContent>
                <CarouselItem key={"csl2"} className="basis-10/12 md:basis-3/5">
                  <div>
                    <Image
                      src={"/img/hyperlane/flow.png"}
                      alt={
                        "Fully White Labelled Flow CBBTC Hyperlane Bridge powered by Superbridge"
                      }
                      width={958}
                      height={706}
                      sizes="100vw"
                      className="w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem key={"csl1"} className="basis-10/12 md:basis-3/5">
                  <div>
                    <Image
                      src={"/img/hyperlane/renzo.png"}
                      alt={
                        "Fully White Labelled Renzo ezETH Hyperlane Bridge powered by Superbridge"
                      }
                      width={958}
                      height={706}
                      sizes="100vw"
                      className="w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem key={"csl3"} className="basis-10/12 md:basis-3/5">
                  <div>
                    <Image
                      src={"/img/hyperlane/molten.png"}
                      alt={
                        "Fully White Labelled Molten Hyperlane Bridge powered by Superbridge"
                      }
                      width={958}
                      height={706}
                      sizes="100vw"
                      className="w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem key={"csl4"} className="basis-10/12 md:basis-3/5">
                  <div>
                    <Image
                      src={"/img/hyperlane/elixir.png"}
                      alt={
                        "Fully White Labelled Elixir deUSD Hyperlane Bridge powered by Superbridge"
                      }
                      width={958}
                      height={706}
                      sizes="100vw"
                      className="w-full h-auto mt-4 rounded-tr-lg rounded-tl-lg md:rounded-tr-2xl md:rounded-tl-2xl"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-card" />
              <CarouselNext className="right-4 bg-card" />
            </Carousel>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl backdrop-blur-md bg-card p-6 md:p-10 pb-0 md:pb-0 overflow-hidden flex flex-col gap-2 justify-between items-start">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty">
                  Embedable widget
                </h3>
                <p className="font-heading  text-muted-foreground leading-snug text-pretty">
                  Drop Superbridge directly into your app.
                </p>
              </div>
              <Image
                src={"/img/hyperlane/widget.png"}
                alt={"Embedable Superbridge Widget powered by Hyperlane"}
                width={428}
                height={404}
                sizes="100vw"
                className="w-full h-auto mt-6 translate-y-[12%]"
              />
            </div>
            <div className="rounded-3xl backdrop-blur-md p-8 relative overflow-hidden bg-[#F50FD6] flex flex-col gap-8 justify-between">
              <div className="relative z-10 h-full aspect-[4/3]">
                <StickerCode className="absolute w-1/4 h-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] drop-shadow-sm" />
                <StickerDomain className="absolute w-1/5 h-auto left-3 top-2 rotate-[-28deg] drop-shadow-sm" />
                <StickerComputer className="absolute w-1/5 h-auto right-3 top-4 rotate-[28deg] drop-shadow-sm" />
                <StickerLink className="absolute w-1/5 h-auto left-8 bottom-2 drop-shadow-sm" />
                <StickerTerms className="absolute w-1/5 h-auto right-8 bottom-2 rotate-[15deg] drop-shadow-sm" />
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl md:text-3xl font-heading leading-tight md:leading-tight text-pretty">
                  More ways to make it yours
                </h3>
                <p className="font-heading  leading-snug text-pretty">
                  Custom domains, legal, links, metadata & more…
                </p>
              </div>
              <div className="absolute -inset-32 bg-[url('/img/hyperlane/grid.svg')] bg-[length:32px_32px] opacity-15 rotate-[15deg] animate-sb-grid"></div>
            </div>

            <div className="rounded-3xl backdrop-blur-md bg-card p-8 bg-gradient-to-b from-[#A882FD] to-[#D098FF]">
              <ul>
                <li className="py-4 border-b border-b-2 border-foreground group relative">
                  <a href="https://dune.com/alexbh/superbridge" target="_blank">
                    <h3 className="text-4xl md:text-5xl font-heading leading-snug md:leading-snug ">
                      $2.3 Billion+
                    </h3>
                    <p className="opacity-80">Total value bridged</p>
                    <IconArrowUpRight className="w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all" />
                  </a>
                </li>
                <li className="py-4 border-b border-b-2 border-foreground group relative">
                  <a href="https://dune.com/alexbh/superbridge" target="_blank">
                    <h3 className="text-4xl md:text-5xl font-heading leading-snug md:leading-snug ">
                      170k+
                    </h3>
                    <p className="opacity-80">Bridge actions </p>
                    <IconArrowUpRight className="w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all" />
                  </a>
                </li>
                <li className="py-4 group relative">
                  <a href="https://dune.com/alexbh/superbridge" target="_blank">
                    <h3 className="text-4xl md:text-5xl font-heading leading-snug md:leading-snug ">
                      150+
                    </h3>
                    <p className="opacity-80">Supported blockchains</p>
                    <IconArrowUpRight className="w-6 h-auto fill-foreground absolute right-0 top-1/2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl backdrop-blur-md bg-card p-8 flex flex-col justify-between">
              <div className="flex flex-col gap-2 min-h-[220px]">
                <h3 className="text-3xl md:text-4xl font-heading leading-tight md:leading-tight text-pretty">
                  Get Superbridge for Hyperlane
                </h3>
                <p className="text-muted-foreground leading-snug">
                  Starting from $500/month
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <Button size={"lg"} asChild>
                  <Link href="https://dashboard.superbridge.app/register">
                    Get Superbridge
                  </Link>
                </Button>
                <Button size={"lg"} variant={"secondary"} asChild>
                  <Link href="https://dashboard.superbridge.app/login">
                    Login
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
