// страница одной практики, с возможностью редактирования и просмотра зявок, а также отклонения и прияния заявок

import { OnePracticePage } from "@/src/screens/practice/onePractice";
import { FC } from "react";

type OnePracticeProps = {
  params: { id: number };
};

const OnePractice: FC<OnePracticeProps> = ({ params }) => {
  return <OnePracticePage id={params.id} />;
};

export default OnePractice;
