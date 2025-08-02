import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 text-center">
      <div className="flex justify-center gap-4">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={reactLogo} className="h-24 p-6" alt="React logo" />
        </a>
      </div>
      <h1 className="mt-4 text-3xl font-bold">Vite + React</h1>
      <div className="mt-8">
        <button
          className="rounded-lg border border-transparent bg-gray-800 px-4 py-2 font-medium hover:border-[#646cff]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
