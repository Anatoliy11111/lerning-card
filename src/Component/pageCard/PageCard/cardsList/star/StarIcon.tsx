import { ReactElement } from 'react';

type StarIconProps = {
  isActive: boolean;
};

export const StarIcon = ({ isActive }: StarIconProps): ReactElement => {
  const fillColor = isActive ? '#21268F' : '#D7D8EF';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      width="12px"
      height="12px"
      x="0"
      y="0"
      enableBackground="new 0 0 329.942 329.942"
      version="1.1"
      viewBox="0 0 329.942 329.942"
      xmlSpace="preserve"
      style={{ marginRight: '3px' }}
    >
      <path d="M329.208 126.666a14.999 14.999 0 00-12.109-10.209l-95.822-13.922-42.854-86.837a15.001 15.001 0 00-26.902 0l-42.851 86.836-95.825 13.922a15 15 0 00-8.313 25.586l69.339 67.582-16.375 95.446a15 15 0 0021.764 15.813l85.711-45.059 85.71 45.059a15.191 15.191 0 007.021 1.723c8.275-.012 14.979-6.723 14.979-15 0-1.152-.13-2.275-.376-3.352l-16.233-94.629 69.339-67.583a14.997 14.997 0 003.797-15.376z" />
    </svg>
  );
};