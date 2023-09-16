import useSWR from "swr";
import { useRouter } from "next/router";
import { Response } from "@/types/Response.type";
import { Comic } from "@/types/Comic";
import ComicChapter from "@/containers/Comic/ComicDetail/ComicChapter";
import ComicRelate from "@/containers/Comic/ComicDetail/ComicRelate";
import { useContext, useEffect } from "react";
import axiosClient from "@/services/backend/axiosClient";
import ComicInfo from "@/containers/Comic/ComicDetail/ComicInfo";
import CommentBox from "@/containers/Comic/ComicDetail/CommentBox";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { ToastContext } from "@/contexts/ToastContext";

const ComicPage = () => {
  const router = useRouter();

  const { setReportModalData, checkAuth } = useContext(ToastContext);
  const { data: comicResponse, mutate } = useSWR<Response<Comic>>(
    router.isReady ? `/api/comic/${router.query.slug}` : null
  );

  useEffect(() => {
    axiosClient.get(
      `/api/comic/${router.query.slug}/increment?field=view&jump=1`
    );
    mutate();
  }, [router.query.slug, mutate]);

  return (
    <>
      <header>
        <title>
          {comicResponse?.result.name} [{comicResponse?.result.new_chapter?.name}] - MangaHay
        </title>
        <meta property="og:title" content={`${comicResponse?.result.name} [${comicResponse?.result.new_chapter?.name}] - MangaHay`}></meta>
        <meta name="keywords" 
        content="Truyện tranh, Truyện ngôn tình, mangahay, topmanga, mangahaytop, mangamoinhat, truyentranh, truyenhay, saytruyen, dichtruyen, hamtruyen, vcomi, nettruyen"/>
        <meta name="description" content={`Đọc truyện ${comicResponse?.result.brief_desc} mới nhất  - ${comicResponse?.result.new_chapter?.name}`}/>
        <meta name="description" content={`Đọc truyện ${comicResponse?.result.brief_desc} mới nhất  - ${comicResponse?.result.new_chapter?.slug}`}/>
        <meta name="description" content={comicResponse?.result.brief_desc}/>
        <meta name="description" content={comicResponse?.result.slug}/>
      </header>
      {comicResponse?.result ? (
        <div className="flex flex-col gap-4">
          <ComicInfo comic={comicResponse?.result} mutateComic={mutate} />
          <ComicChapter comic={comicResponse?.result} />
          <CommentBox
            comic={comicResponse?.result}
            onClickReport={(id: string) =>
              checkAuth(router.asPath) &&
              setReportModalData({ type: "comment", id: id })
            }
          />
          {!!comicResponse.result?.authors?.length && (
            <ComicRelate comic={comicResponse.result} />
          )}
        </div>
      ) : (
        <LoadingSkeleton.ComicInfo />
      )}
    </>
  );
};

export default ComicPage;
