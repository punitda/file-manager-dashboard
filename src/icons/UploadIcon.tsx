import React from "react";

interface Props {
  className: string;
}

const UploadIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path
        fill-rule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export default UploadIcon;