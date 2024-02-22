import TextMarquee from "@/components/marquee";
import SectionLayout from "@/layouts/section-layout";
import Header from "../_components/header";

const Hero = () => {
  return (
    <section className="flex h-svh flex-col ">
      <Header />
      <SectionLayout full hero>
        <div className="my-auto flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="flex flex-col gap-3 md:gap-6">
            <span className="text-center font-tertiary text-xl font-extrabold text-white md:text-3xl">
              28, 29 FEB &nbsp;
              <span className="text-primary">2024</span>
            </span>
            <div className="text-center text-8xl font-extralight uppercase">
              <div>The Belfort of</div>{" "}
              <div className="font-black text-primary">Wallstreet</div>
            </div>
            <span className="text-center font-secondary text-2xl lowercase tracking-wider text-primary">
              Ideate . design . develop . test . pitch
            </span>
          </div>

          <div className="flex flex-col px-2 text-center">
            <p className="font-tertiary text-7xl font-extrabold text-primary">
              12k
            </p>
            <p className="font-secondary text-xl lowercase text-white md:text-2xl">
              Prizepool
            </p>
          </div>
        </div>
      </SectionLayout>
      <TextMarquee />
    </section>
  );
};

export default Hero;
