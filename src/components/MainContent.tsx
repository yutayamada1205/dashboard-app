import { ReactNode } from 'react'

type MainContentProps = {
  title: string
  children: ReactNode
}

export default function MainContent({ title, children }: MainContentProps) {
  return (
    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <div className="bg-white rounded-lg shadow p-6">
        {children}
      </div>
    </main>
  );
}