import React, { ElementType } from 'react';
import { Space } from 'antd';

type IconTextProps = {
  icon: ElementType;
  text: string | number;
};

const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
  const Icon: ElementType = icon;

  return (
    <Space>
      {icon && <Icon />}
      {text}
    </Space>
  );
};

export default IconText;
