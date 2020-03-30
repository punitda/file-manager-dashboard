import React from "react";

interface Props {
  className: string;
}

const ArrowDownIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path
        fill-rule="evenodd"
        d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default ArrowDownIcon;
