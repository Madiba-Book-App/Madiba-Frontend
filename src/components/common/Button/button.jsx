import React from "react";
import { Button } from "antd";

import "./button.scss";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ children, ...otherProps }) => (
  <div>
    <Button className={`custom-button`} {...otherProps}>
      {children}
    </Button>
  </div>
);

export default CustomButton;
