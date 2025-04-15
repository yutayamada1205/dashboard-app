import { ReactNode } from 'react'

type MainContentProps = {
  children: ReactNode
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-1 p-6 bg-gray-100 overflow-auto">
      <div className="bg-white rounded-lg shadow p-6">
        {children}
      </div>
    </main>
  );
}