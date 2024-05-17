import { ReactNode } from "react";

type PDPLayoutProps = {
  params: { letter: string };
  children: ReactNode;
  grid: ReactNode;
  grid2: ReactNode;
  grid3: ReactNode;
  grid4: ReactNode;
  grid5: ReactNode;
  grid6: ReactNode;
  grid7: ReactNode;
  grid8: ReactNode;
  grid9: ReactNode;
  grid10: ReactNode;
  grid11: ReactNode;
  grid12: ReactNode;
  grid13: ReactNode;
  grid14: ReactNode;
  grid15: ReactNode;
  grid16: ReactNode;
  grid17: ReactNode;
  grid18: ReactNode;
  grid19: ReactNode;
  grid20: ReactNode;
};

export default function LetterLayout(props: PDPLayoutProps) {
  return (
    <div className="bg-gray-100">
      {props.children}
      <div className="bg-gray-400 p-4">
        {props.grid}
        {props.grid2}
        {props.grid3}
        {props.grid4}
        {props.grid5}
        {props.grid6}
        {props.grid7}
        {props.grid8}
        {props.grid9}
        {props.grid10}
        {props.grid11}
        {props.grid12}
        {props.grid13}
        {props.grid14}
        {props.grid15}
        {props.grid16}
        {props.grid17}
        {props.grid18}
        {props.grid19}
        {props.grid20}
      </div>
    </div>
  );
}
