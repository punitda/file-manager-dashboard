import React from "react";

interface Props {
  className: string;
}

const CameraIcon: React.FC<Props> = ({ className }) => {
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
      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  );
};

export default CameraIcon;
