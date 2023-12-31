import { Chapter } from "@/types/Chapter";
import { Comic } from "@/types/Comic";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import useSWR from "swr";
import { Response } from "@/types/Response.type";
import { Skeleton } from "primereact/skeleton";

interface IComicChapterProps {
  comic?: Comic;
}

const ComicChapter = ({ comic }: IComicChapterProps) => {
  const { data: chaptersResponse } = useSWR<Response<Chapter[]>>(
    `/api/comic/chapter/${comic?.id}`
  );

  return (
    <div className="p-4 bg-white shadow-md">
      <h2 className="text-lg font-medium mb-4">Chapter List</h2>
      {chaptersResponse?.result ? (
        <div className="max-h-96 scrollbar-thin scrollbar-thumb-yellow-200 scrollbar-track-gray-200 overflow-y-scroll">
          <ul className="py-2 ">
            {chaptersResponse?.result?.map((chap: any) => (
              <li
                key={chap.name}
                className="flex justify-between py-2 border-b border-gray-200"
              >
                <meta name="description" content={chap.name} />
                <Link
                  href={`/comic/${comic?.slug}/${chap.slug}/${chap.id}`}
                  className="text-black visited:text-slate-300"
                >
                  <h1>{chap.name}</h1>
                </Link>
                <span className="text-gray-400 text-sm mr-5">
                  {formatDate(chap.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Skeleton height="24rem" width="100%" />
      )}
    </div>
  );
};

export default ComicChapter;
