export async function fetcher(key: string) {
  const res = await fetch(key)
  if (!res.ok) {
    throw new Error("ネットワークエラーが発生しました")
  }
  return res.json()
}