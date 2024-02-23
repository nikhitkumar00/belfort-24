import { CustomText } from "@/components/custom";

const About = () => {
  return (
    <div className="flex flex-col gap-4 text-right font-secondary text-secondary">
      <CustomText title>
        what is&nbsp;
        <CustomText className="text-wrap text-left" highlightedTitle>
          the belfort of wallstreet?
        </CustomText>
      </CustomText>

      <CustomText description>
        <CustomText highlightedDescription>
          The Belfort of Wall Street
        </CustomText>{" "}
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
