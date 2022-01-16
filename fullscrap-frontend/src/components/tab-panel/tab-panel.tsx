import { ReactNode } from "react";
import "./tab-panel.scss";

export interface TabPanelProps {
  value: number;
  index: number;
  children: ReactNode;
  className?: string;
}
export const TabPanel = ({
  value,
  index,
  children,
  className = "",
}: TabPanelProps) => {
  return (
    <div
      className={`tab-panel ${
        value === index ? "tab-panel--active" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default TabPanel;
