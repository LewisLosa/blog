import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { PostCardProps } from "@/lib/interface";

interface props {
  post: PostCardProps;
}

export function PostCard({ post }: props) {
  return (
    <Link href={`/blog/post/${post.slug.current}`}>
      <Card className="hover:shadow-md transition-shadow group overflow-hidden mb-4">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold tracking-tight mb-2">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags &&
              Array.isArray(post.tags) &&
              post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  {tag.name}
                </span>
              ))}
          </div>

          <div className="flex items-center text-blue-500 group-hover:text-blue-600">
            Daha fazla oku <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
