import React from "react";

interface Props {
  className: string;
}

const VerticalDotsIcons: React.FC<Props> = ({ className }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
    </svg>
  );
};

export default VerticalDotsIcons;
