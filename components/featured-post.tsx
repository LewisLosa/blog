import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { PostCardProps } from "@/lib/interface";

interface props {
  post: PostCardProps;
}


export function FeaturedPost({post}: props) {
  return (
    <Link href={`/blog/post/${post?.slug.current}`}>
      <Card className="hover:shadow-lg transition-shadow group overflow-hidden">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-[2fr_1fr]">
            <div className="space-y-4 p-6">
              <h2 className="text-5xl tracking-tight">{post?.title}</h2>
              <p className="text-xl text-muted-foreground">{post?.excerpt}</p>
              <div className="flex items-center text-blue-500 group-hover:text-blue-600">
                Daha fazla oku <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            <Image
              src="/static/images/mvvm.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Görsel"
              className="flex items-center justify-center bg-blue-500 transition-colors group-hover:bg-blue-600 w-full h-full"
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
