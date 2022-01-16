import { ReactNode } from "react";
import Tab from "../tab/tab";
import "./tabs.scss";

export interface TabsProps {
  tabs: { label: string; icon: ReactNode; disabled: boolean }[];
  value: number;
  onChange: any;
}

export const Tabs = ({ tabs, value, onChange }: TabsProps) => {
  const onClickTab = (tab: any) => {
    onChange(tab);
  };
  return (
    <ol className="tabs">
      {tabs.map((item, index) => (
        <Tab
          onClick={() => onClickTab(index)}
          key={item.label}
          label={item.label}
          value={value}
          index={index}
          icon={item.icon}
          disabled={item.disabled}
        />
      ))}
    </ol>
  );
};

export default Tabs;
