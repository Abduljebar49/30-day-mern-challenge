interface Props {
  text: string;
}
const DisplayProps = ({ text }: Props) => {
  
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export default DisplayProps;
