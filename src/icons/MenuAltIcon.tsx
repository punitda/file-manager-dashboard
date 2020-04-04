import React from "react";

interface Props {
  className: string;
}

const MenuAltIcon: React.FC<Props> = ({ className }) => {
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
      <path d="M4 6h16M4 12h16M4 18h7"></path>
    </svg>
  );
};

export default MenuAltIcon;
