import React from 'react';
interface Props {
  height?: string;
  width?: string;
  icon?: any;
}

const Icons = ({ height, width, icon }: Props) => {
  return (
    <>
      <img src={icon} style={{ height: height, width: width }}></img>
    </>
  );
};

export default Icons;
