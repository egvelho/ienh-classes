type DobraProps = {
  children: any;
};

export default function Dobra(props: DobraProps) {
  return <div>{props.children * 2}</div>;
}
