import React from "react";
import Skill from "./Skill";

const TailwindSkill: React.FC = () => {
  return <Skill name="Tailwind" backgroundColor="#38b2ac" />;
};

const APISkill: React.FC = () => {
  return <Skill name="API" backgroundColor="transparant" />;
};

const TypeScriptSkill: React.FC = () => {
  return <Skill name="TypeScript" backgroundColor="#3178c6" />;
};

const HTMLSkill: React.FC = () => {
  return <Skill name="HTML" backgroundColor="transparant" />;
};

const CSSSkill: React.FC = () => {
  return <Skill name="CSS" backgroundColor="transparant" />;
};

const AntSkill: React.FC = () => {
  return <Skill name="AntD" backgroundColor="#1890ff" />;
};

export {
  TailwindSkill,
  APISkill,
  TypeScriptSkill,
  CSSSkill,
  HTMLSkill,
  AntSkill,
};
