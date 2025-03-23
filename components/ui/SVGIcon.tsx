import React from 'react';

interface SVGObjectProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const SVGObject: React.FC<SVGObjectProps> = ({
  src,
  className,
  style,
  width = '32px',
  height = '32px',
}) => {
  return (
    <object
      data={src}
      type="image/svg+xml"
      className={className}
      style={{ width, height, ...style }}
    >
      Un-Supported
    </object>
  );
};

export default SVGObject;