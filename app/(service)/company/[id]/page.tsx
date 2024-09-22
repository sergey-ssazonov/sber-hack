// страница одной компании

import { OneCompanyPage } from "@/src/screens/company/oneCompany";
import { FC } from "react";

type OneCompanyProps = {
    params: { id: number}
}


const OneCompany: FC<OneCompanyProps> = ({params}) => {
    return (
        <OneCompanyPage id={params.id}/>
    )
}

export default OneCompany