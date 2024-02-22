import { CustomText } from "@/components/custom";

const Map = () => {
  return (
    <div>
      <CustomText highlightedTitle>Location</CustomText>
      <iframe
        className="z-[9999] mt-10 h-96 w-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.8008733398988!2d76.21012851044318!3d10.357800989723984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f65a7d7bc725%3A0x22dc855ba6cace68!2sChrist%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708596335770!5m2!1sen!2sin"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
