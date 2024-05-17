import { getShuffledAlphabet } from "@/util/randomLetter";
import Link from "next/link";

const PAGE_INDEX = 1;

export default async function PDPGridPage({
  params: {
    letter,
  },
}: {
  params: { letter: string };
}) {
  console.log({ letter }, `GRID ${PAGE_INDEX} - Page`);
  await new Promise(r => setTimeout(r, 1000));

  return (
    <ul role="list" className="mx-auto max-w-2xl space-y-3">
      {getShuffledAlphabet().map((letter) => (
        <li key={letter} className="text-center overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <Link href={`/${letter}`}>
            <div>{letter}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export const fetchCache = "default-cache";
