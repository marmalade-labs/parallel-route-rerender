
export default async function LetterPage({ params: { letter } }: { params: { letter: string } }) {
  console.log({ letter }, "Letter - Page");
  await new Promise(r => setTimeout(r, 1000));
  return (
    <div className="flex justify-center items-center min-h-[50dvh]">
      <h1 className="text-xl">{letter}</h1>
    </div>
  )
}
