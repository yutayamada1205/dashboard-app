import useSWR from "swr"
import PostList from "@/components/PostList"
import { Post } from "@/types/api/post"
import { fetcher } from "@/utils/fetcher"

export default function Dashboard() {
  const { data, error, isLoading } = useSWR<Post[]>("https://jsonplaceholder.typicode.com/posts", fetcher)

  const totalPosts = data?.length ?? 0
  const totalUsers = new Set(data?.map((post) => post.userId) ?? []).size

  // 表示用に最初の10件のみを取得
  const displayPosts = data?.slice(0, 10) ?? []

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ダッシュボード</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-semibold mb-2">投稿数</h3>
          <p className="text-2xl">
          {isLoading ? (
            <span className="inline-block animate-spin border-2 border-gray-300 border-t-gray-900 rounded-full w-5 h-5"></span>
          ) : error ? (
            <span className="text-red-500">エラーが発生しました</span>
          ) : (
            totalPosts
          )}
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="font-semibold mb-2">投稿ユーザー数</h3>
          <p className="text-2xl">
            {isLoading ? (
              <span className="inline-block animate-spin border-2 border-gray-300 border-t-gray-900 rounded-full w-5 h-5"></span>
            ) : error ? (
              <span className="text-red-500">エラーが発生しました</span>
            ) : (
              totalUsers
            )}
          </p>
        </div>
      </div>

      {/* 投稿一覧 */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="font-semibold mb-4">投稿一覧（最新10件）</h3>
        {isLoading ? (
          <div className="flex justify-center p-4">
            <span className="inline-block animate-spin border-2 border-gray-300 border-t-gray-900 rounded-full w-6 h-6"></span>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4">エラーが発生しました</div>
        ) : (
          <div className="divide-y">
            <PostList posts={displayPosts ?? []} />
          </div>
        )}
      </div>
    </div>
  )
}