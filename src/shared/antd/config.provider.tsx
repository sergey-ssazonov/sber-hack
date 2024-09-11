import { ConfigProvider } from "antd";
import React, { Children } from "react";
import { themeAntd } from "./theme";

const ConfigProviderAntd = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={themeAntd}>{children}</ConfigProvider>;
};

export default ConfigProviderAntd;
