import ComicCard from "@/components/Cards/ComicCard";
import CardListContainer from "@/containers/ListContainers/CardList";
import { Comic } from "@/types/Comic";
import { useRouter } from "next/router";

const TopPage = () => {
  const router = useRouter();

  return (
    <>
    <header>
      <title>Bảng xếp hạng truyện - MangaHay</title>
      <meta name="description" content="Bảng xếp hạng tuần này" />
    </header>
    <div className="top-page">
      <CardListContainer
        title="Bảng xếp hạng tuần này"
        fetchUrl={(index, pageSize) =>
          `/api/comic/ranking?field=view&page=${index + 1}&limit=${pageSize}`
        }
      >
        {(comic) => (
          <ComicCard.Preview
            data={comic as Comic}
            onClick={(data) => data?.id && router.push(`comic/${data?.slug}`)}
          />
        )}
      </CardListContainer>
    </div>
    </>
  );
};

export default TopPage;
