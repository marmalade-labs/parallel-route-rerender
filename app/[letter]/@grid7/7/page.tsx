const PAGE_INDEX = 7;

export default function GridPage({ params: { letter } }: { params: { letter: string } }) {
  console.log({ letter }, `GRID ${PAGE_INDEX} - Page`);
  return (<div>I will never be shown</div>)
}
