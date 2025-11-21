import { CounterCard } from './components/CounterCard'
import { UserCard } from './components/UserCard'
import { BookOpen } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-12 w-12 text-primary" />
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              React TypeScript Learning
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Vite + React + TypeScript + Redux Toolkit + RxJS + shadcn/ui
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <CounterCard />
          <UserCard />
        </div>

        <footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
          <div className="space-y-2">
            <p className="font-semibold">Learning Topics Covered:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'TypeScript Types & Interfaces',
                'Redux Toolkit Slices',
                'RxJS Observables & Operators',
                'React Hooks (useState, useSelector, useDispatch)',
                'Tailwind CSS',
                'shadcn/ui Components',
                'Vite Build Tool'
              ].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-xs border border-gray-200 dark:border-gray-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
