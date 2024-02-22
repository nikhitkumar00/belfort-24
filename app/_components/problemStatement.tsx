import { CustomText } from "@/components/custom";

const Round = () => {
  const rounds = [
    {
      qn: "Ideation",
      ans: "Participating teams are given problem statements fairly. Develop an innovative and efficient solution and create a presentation for the same and present it to expert judging panel. The authenticity and scope of the ideas will be evaluated, along with the quality and effectiveness of the solutions presented",
      date: "February 28",
    },
    {
      qn: "Prototyping and Pitching",
      ans: "The shortlisted teams from Round 1 will begin the prototyping session. During this round the teams are to create a prototype of their solution and then do a Business pitch to the judging panel. Money management, Investment, Marketing strategies and Mind map of a team will be evaluated here.",
      date: "February 29",
    },
    {
      qn: "Marketing",
      ans: "Round 3 of the Belfort of Wall Street 2024 , will be conducted in an open area mode at Christ college of Engineering campus. All the selected teams have to be present at the campus where the audience will be your customer. Participants will have to interact with the audience and market their ideas/products. The winner of this round will be decided by audience poll.",
      date: "February 29",
    },
  ];
  return (
    <div className="z-10">
      <CustomText highlightedTitle className="mb-6">
        Rounds
      </CustomText>
      {rounds.map((statement, index) => (
        <div key={index} className="flex flex-col gap-4 pt-10">
          <div className="flex flex-col gap-1 font-secondary text-2xl md:text-3xl">
            <span className="font-tertiary text-xl text-secondary md:text-2xl">
              <span className="whitespace-nowrap">{statement.date}</span>
            </span>
            <span>{statement.qn}</span>
          </div>
          <CustomText description>
            <span className="opacity-85">{statement.ans}</span>
          </CustomText>
        </div>
      ))}
    </div>
  );
};

export default Round;
