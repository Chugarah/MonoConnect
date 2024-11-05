import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to=".">Go to Home</Link>
    </div>
  )
}