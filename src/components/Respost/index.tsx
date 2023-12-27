import "./styles.scss";

type RespostProps = {
  text: string;
};

export default function Respost(props: RespostProps) {
  return (
    <>
      <h1> {props.text}</h1>
    </>
  );
}
