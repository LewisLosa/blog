import { Any } from "next-sanity";

export interface PostCardProps {
  title: string;
  excerpt: string;
  slug: { current: string };
  coverImage: { _type: string; asset: object };
  tags: Array<Tag>;
}

export interface RecentPost {
  title: string;
  slug: { current: string };
}

export interface Post {
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    coverImage: { _type: string; asset: object };
    body: Any[];
    tags: Array<Tag>;
    _id: string;
}

export interface Tag {
    name: string;
    slug: { current: string };
    _id: string;
}
