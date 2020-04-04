import React from "react";

interface Props {
  className: string;
}

const ChevronDownIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M19 9l-7 7-7-7"></path>
    </svg>
  );
};

export default ChevronDownIcon;
