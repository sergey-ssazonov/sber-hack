import React, { FC } from "react";

type OneCompanyPageProps = { id: number };

const OneCompanyPage: FC<OneCompanyPageProps> = ({ id }) => {
  return <div>OneCompanyPage {id}</div>;
};

export default OneCompanyPage;
