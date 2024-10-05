import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Filters from "../components/Filters";
import BoardingCard from "../components/BoardingCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/BoardingApi");
        const data = await res.json();
        if (!res.ok) {
          return console.log(data.message);
        }
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="p-2 mt-4 md:hidden">
      <SearchBar />
      </div>
      <HeroSection />
      <div className="w-full md:max-w-4xl md:mx-auto p-2 mt-4 md:mt-8">
        <div className="flex flex-col md:flex-row justify-center rounded-lg gap-4 border p-2">
          <div className="flex-1 md:max-w-[280px] p-4  h-fit rounded-lg md:sticky md:top-24">
            <Filters />
          </div>
          <div className="flex-1 flex flex-col gap-8 p-4  rounded-lg">
          <h2 className="font-medium text-lg">Recent Ads</h2>
            <div className="flex items-center flex-wrap-reverse gap-3 justify-between">
              
              <div className="relative w-full md:w-auto flex items-center border rounded-lg overflow-hidden border-gray-200">
                <select
                  className="border-0 focus:ring-0 flex-1 py-3 text-sm text-gray-500"
                  type="text"
                  required
                  defaultValue={"all"}
                >
                  <option value="all">All</option>
                  <option value="featured">Featured</option>
                  <option value="top-rated">Top Rated</option>
                </select>
              </div>
              <div className="hidden md:flex flex-1 md:flex-grow-0">
                <SearchBar />
              </div>
            </div>
            {posts && posts.length > 0 ? (
              <div className="flex flex-col gap-3">
                {posts.map((post) => (
                  <BoardingCard className="" key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p>No posts available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
