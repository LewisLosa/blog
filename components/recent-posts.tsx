import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { RecentPost } from "@/lib/interface"

interface props {
  post: RecentPost[];
}

export function RecentPosts({ post }: props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>En Son Yayınlananlar</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {post?.length > 0 && post.map((post) => (
            <li key={post.slug.current}>
              <Link className="text-blue-500 hover:text-blue-600" href={`/blog/post/${post.slug.current}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

