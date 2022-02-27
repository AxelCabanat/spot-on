import { ReactChildren, ReactChild } from "react";
interface Props {
  children: ReactChild | ReactChildren;
  htmlFor: string;
}

const Label = ({ children, htmlFor }: Props) => (
  <label htmlFor={htmlFor} className="block text-xl font-medium text-gray-700">
    {children}
  </label>
);

export default Label;
