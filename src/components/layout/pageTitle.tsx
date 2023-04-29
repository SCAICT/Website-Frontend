interface IProps {
  title: string;
}

export default function PageTitle(props: IProps) {
  return (
    <div className="min-h-[50svh] bg-gradient-to-r from-[rgb(60,60,97)] from-10% via-[rgb(78,106,119)] via-30% to-[#547e70] to-90% flex items-center justify-center">
      <h1 className="text-4xl tracking-widest font-thin">{props.title}</h1>
    </div>
  );
}
