import React from "react";

interface SkillProps {
  name: string;
  backgroundColor: string;
}

const Skill: React.FC<SkillProps> = ({ name, backgroundColor }) => {
  return (
    <div
      className="text-[10px] mt-[2px] mb-[8px] mr-[8px] border-[2px] border-white w-fit px-[10px] rounded-xl"
      style={{ backgroundColor }}
    >
      {name}
    </div>
  );
};

export default Skill;
