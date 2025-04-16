import PostCard from "./PostCard"
import { Post } from "../types/api/post"

type PostListProps = {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}