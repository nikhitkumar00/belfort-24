import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 px-6 pb-12 pt-10 text-right font-secondary text-secondary sm:px-12 sm:pt-20 md:pb-16 lg:px-16 lg:pb-24 xl:px-32 2xl:px-48">
      <CustomText title className="self-end">
        what is&nbsp;
        <CustomText highlightedTitle>belfort of wallstreet</CustomText>?
      </CustomText>

      <CustomText description>
        <CustomText highlightedDescription>Belfort of Wall Street</CustomText>{" "}
        by IEDC CCE, is where innovation meets entrepreneurship in a thrilling
        competition aimed at transforming ideas into impactful ventures. Through
        three dynamic rounds -{" "}
        <CustomText highlightedDescription>
          Ideation, Prototyping and Business Pitching, and Marketing
        </CustomText>{" "}
        participants showcase their creativity, business acumen, and marketing
        prowess.
      </CustomText>
    </div>
  );
};

export default About;
