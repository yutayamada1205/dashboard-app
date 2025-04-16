export async function fetcher<T>(key: string): Promise<T> {
  const res = await fetch(key)
  if (!res.ok) {
    throw new Error("ネットワークエラーが発生しました")
  }
  return res.json() as Promise<T>
}