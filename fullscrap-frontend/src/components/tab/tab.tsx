import { ReactNode } from "react";
import "./tab.scss";

export interface TabProps {
  label: string;
  value: number;
  index: number;
  disabled: boolean;
  icon: ReactNode;
  onClick: any;
}

const Tab = ({ label, value, index, disabled, onClick, icon }: TabProps) => {
  return (
    <li
      onClick={disabled ? null : onClick}
      className={`tab ${value === index ? "tab--active" : ""} ${
        disabled ? "tab--disabled" : ""
      }`}
    >
      <p>{label}</p>
      {icon}
    </li>
  );
};

export default Tab;
