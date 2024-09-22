import { ThemeConfig } from "antd";

export const themeAntd: ThemeConfig = {
  token: {
    colorPrimary: "#47AB4B",
    fontSizeHeading3: 26,
  },

  components: {
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
    Button: {
      colorIcon: "#47AB4B",
      defaultBorderColor: "none",
      defaultBg: "#f3f4f6",
    },
    Modal: {
      borderRadius: 26,
    },
    Tabs: {
      // cardBg: "#222",
      horizontalMargin: "0 0 0 40px",
      horizontalItemPadding: "20px 10px",
      cardHeight: 75,
      // itemColor: "#8C888A",
    },
    Menu: {
      itemBg: "#fff",
    },
    Layout: {
      siderBg: "#fff",
      bodyBg: "#f3f4f6",
    },
  },
};
