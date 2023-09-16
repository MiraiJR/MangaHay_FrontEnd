/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import classes from "./ComicDetail.module.sass";
import { Skeleton } from "primereact/skeleton";
import { Comic } from "@/types/Comic";
import ComicInteractPanel from "./ComicInteractPanel";
import { KeyedMutator } from "swr";
import { Response } from "@/types/Response.type";

interface IComicInfoProps {
  comic?: Comic;
  mutateComic?: KeyedMutator<Response<Comic>>;
}

const ComicInfo = ({ comic, mutateComic }: IComicInfoProps) => {
  return (
    <>
      <div className={classes.comicdetail__header}>
        <div className="main-image w-full h-[32rem] absolute md:relative overflow-hidden ">
          <img
            className="w-full h-full object-cover object-left-top filter blur-lg webkit-filter"
            src={comic?.thumb}
            alt={comic?.name}
          />
        </div>
        <div className={classes.header__detailinfo}>
          <div className={classes.detailinfo__thumb}>
            {comic?.thumb ? (
              <img src={comic.thumb} alt={comic.brief_desc} />
            ) : (
              <Skeleton height="300" width="200" animation="wave" />
            )}
          </div>

          <div className={`${classes.detailinfo__right} max-md:!p-5`}>
            {comic?.name ? (
              <h1 className={classes.detailinfo__name}>{comic.name}</h1>
            ) : (
              <Skeleton height="25" animation="wave" />
            )}
            {comic?.authors ? (
              <div className={classes.detailinfo__author}>
                <span>Author: </span>
                {comic?.authors.length !== 0 ?
                  comic?.authors.map((ele: any, index: number) => (
                    <Link href={"/find-comic?filterAuthor=" + ele} key={index}>
                      <h1 className="inline">{ele}</h1>
                    </Link>
                  )) :
                  <h1 className="inline">Chưa cập nhật</h1>
                }
              </div>
            ) : (
              <Skeleton height="20" width="100" animation="wave" />
            )}

            {comic?.genres ? (
              <div className={classes.detailinfo__genre}>
                {comic?.genres &&
                  comic?.genres.map((ele: any) => (
                    <Link key={ele} href={"/genre?genre=" + ele}>
                      <h1>{ele}</h1>
                    </Link>
                  ))}
              </div>
            ) : (
              <Skeleton height="20" width="100" animation="wave" />
            )}

            {comic?.brief_desc ? (
              <h1
                className="detailinfo__brief max-h-36 scrollbar-thin scrollbar-thumb-yellow-200 scrollbar-track-gray-200 overflow-y-scroll"
                dangerouslySetInnerHTML={{ __html: `${comic?.brief_desc} <h1>mangahay.top - Trang web đọc truyện tranh mới nhất<` }}
              ></h1>
            ) : (
              <Skeleton height="20" animation="wave" />
            )}
            <div className={classes.detailinfo__evaluate}>
              <div>
                <span>Lượt xem: </span>
                <span>{comic?.view}</span>
              </div>
              <div>
                <span>Lượt thích: </span>
                <span>{comic?.like}</span>
              </div>
              <div>
                <span>Lượt theo dõi: </span>
                <span>{comic?.follow}</span>
              </div>
            </div>
            <ComicInteractPanel comic={comic} mutateComic={mutateComic} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComicInfo;
