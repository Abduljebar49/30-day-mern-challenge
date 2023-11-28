interface Props {
  type: "text" | "number" | "checkbox";
  value: string;
  placeholder?: string;
}

const Input = ({ type, value, placeholder = "" }: Props) => {
  return <input type={type} value={value} placeholder={placeholder} />;
};

export default Input;
