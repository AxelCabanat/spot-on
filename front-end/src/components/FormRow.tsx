import { ReactChildren, ReactChild } from "react";
interface Props {
  children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const FormRow = ({ children }: Props) => (
  <div className="my-6">{children}</div>
);

export default FormRow;
