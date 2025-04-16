import { Post } from "../types/api/post"

type PostProps = {
  post: Post
}

export default function PostCard({ post }: PostProps) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}