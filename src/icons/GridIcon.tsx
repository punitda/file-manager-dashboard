import React from "react";

interface Props {
  className: string;
}

const GridIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"></path>
    </svg>
  );
};

export default GridIcon;
