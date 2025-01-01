import Image from "next/image";

export default function Home({ children }) {
  return (
    <div className="Home">
      <h1>Welcome to 2024 Election Visualizer</h1>
      <p>
        This application will help you visualize and analyze the 2024 election
        results.
      </p>
      <p>Choose a topic from the navigation bar above.</p>
    </div>
  );
}
