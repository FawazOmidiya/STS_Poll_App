import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <h1 className="text-lg font-bold">2024 Election Visualizer</h1>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/odds">Odds</Link>
        </li>
        <li>
          <Link href="/map">Map</Link>
        </li>
        <li>
          <Link href="/polls">Polls</Link>
        </li>
      </ul>
    </nav>
  );
}
