import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: App,
})

function App() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
