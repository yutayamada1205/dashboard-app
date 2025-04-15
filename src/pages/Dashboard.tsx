import useSWR from "swr"

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise<Post[]>)
}

export default function Dashboard() {
  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  const totalPosts = data?.length ?? 0
  const totalUsers = new Set(data?.map((post) => post.userId) ?? []).size

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">ダッシュボード</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
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
    </div>
  )
}