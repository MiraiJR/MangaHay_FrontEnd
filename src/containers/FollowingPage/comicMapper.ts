import { Comic, FollowingComic } from "./../../types/Comic";

export const followingComicToComicMapper = ({
  comics_another_name,
  comics_authors,
  comics_brief_desc,
  comics_createdAt,
  comics_follow,
  comics_genres,
  comics_id,
  comics_id_owner,
  comics_like,
  comics_name,
  comics_slug,
  comics_star,
  comics_state,
  comics_thumb,
  comics_updatedAt,
  comics_view,
}: FollowingComic): Comic => ({
  another_name: comics_another_name,
  authors: comics_authors,
  brief_desc: comics_brief_desc,
  createdAt: comics_createdAt,
  follow: comics_follow,
  genres: comics_genres,
  id: comics_id,
  id_owner: comics_id_owner,
  like: comics_like,
  name: comics_name,
  slug: comics_slug,
  star: comics_star,
  state: comics_state,
  thumb: comics_thumb,
  updatedAt: comics_updatedAt,
  view: comics_view,
  newest_chapter_name: undefined,
  newest_chapter_slug: undefined,
});
