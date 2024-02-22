import { CustomText } from "@/components/custom";
import { cutoutCity } from "@/public/fonts";

const Guidelines = () => {
  const guidelines = [
    "Each team must consist of 3 to 4 members, and each members must be enrolled in any Undergraduate or Postgraduate Degree Programme. ( Students of MCA/IMCA are also permitted ).",
    "Ethical conduct is expected, and plagiarism or using pre-existing solutions without acknowledgment is strictly prohibited. Participants are supposed to bring their own gadgets as in Laptops and mobile phones for presentation creation and surfing. They are also requested to bring their own network providers.",
    "We will not be responsible for any network issues. Dinner and Breakfast will be provided on 28th and 29th respectively for the teams that proceeds to the next rounds.",
  ];
  return (
    <div className="flex w-full flex-col items-start justify-center gap-12 font-primary text-secondary">
      <CustomText highlightedTitle>Guidelines</CustomText>

      <div className="mb-6 flex w-full flex-col gap-6 sm:mb-12 sm:items-start lg:mb-0">
        {guidelines.map((text, index) => (
          <CustomText description key={index}>
            <div className="flex">
              <span className="block tracking-widest text-primary sm:inline">
                ✺&nbsp;&nbsp;
              </span>
              <span className="font-semibold">{text}</span>
            </div>
          </CustomText>
        ))}
      </div>

      <div className="ml-auto flex w-fit justify-center rounded-xl border border-primary bg-primary bg-opacity-10 px-6 py-2 sm:min-w-80 sm:px-12 sm:py-4">
        <span className="text-center font-secondary text-xl lowercase tracking-wider text-primary sm:text-2xl">
          Venue : Christ College of Engineering
        </span>
      </div>
    </div>
  );
};

export default Guidelines;
