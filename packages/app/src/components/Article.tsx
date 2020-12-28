export interface OwnProps {
  title: string;
  children: React.ReactNode;
}

export function Article(props: OwnProps) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}
