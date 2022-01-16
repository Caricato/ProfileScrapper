import "./skill-item.scss";

export interface ISkillItem {
  name: string;
}

const SkillItem = ({ name }: ISkillItem) => {
  return <div className="skill-item">{name}</div>;
};

export default SkillItem;
