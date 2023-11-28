interface Props {
  name: string;
  color?: string;
  onClick:()=>void
}
const Button = ({ name, color = "primary",onClick }: Props) => {
  return (
    <>
      <button className={"btn " + color} onClick={onClick}>{name}</button>
    </>
  );
};

export default Button;
