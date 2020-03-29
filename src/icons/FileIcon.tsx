import React from "react";

interface Props {
  className: string;
}

const FileIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className={className}>
      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
    </svg>
  );
};

export default FileIcon;
