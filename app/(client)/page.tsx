import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PostCard } from "@/components/post-card";
import { RecentPosts } from "@/components/recent-posts";
import { FeaturedPost } from "@/components/featured-post";
import { client } from "@/sanity/lib/client";
import { Post } from "@/lib/interface";
import { unstable_cache } from "next/cache";

const fetchPosts = unstable_cache(async () => {
  const query = `
*[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  _id,
  tags[]-> {
    _id,
    slug,
    name,
  },
  coverImage {
    asset-> {
      url
    }
  }
}

 `;
  const data = await client.fetch(query);
  return data;
});

async function fetchRecentPosts() {
  const query = `
  *[_type == "post"] {
  title,
  slug,
 }
 `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await fetchPosts();
  const recentPosts = await fetchRecentPosts();

  console.log(posts);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="relative min-h-screen">
      <div className="w-full max-w-7xl">
        <SiteHeader />
        <main className="container py-12 space-y-12">
          <FeaturedPost post={featuredPost} />
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              {otherPosts.map((post) => (
                <PostCard key={post.slug.current} post={post} />
              ))}
            </div>
            <aside>
              <RecentPosts post={recentPosts} />
            </aside>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
