import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Filters from "../components/Filters";
import BoardingCard from "../components/BoardingCard";
import { Link } from "react-router-dom";

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
    <div>
      <HeroSection />
      <div className="w-full md:max-w-4xl md:mx-auto p-2 mt-8">
        <div className="flex justify-center rounded-lg gap-4">
          <div className="hidden md:block flex-1 md:max-w-[280px] p-4 border rounded-lg">
          <Filters />
          </div>
          <div className="flex-1 p-4 border rounded-lg">
            {posts && posts.length > 0 ? (
             
              <div  className="flex flex-col gap-2">
                
                {posts.map((post) => (
                  <Link key={post.id}  to={`/boardingInfo/${post.id}`} state={{post}}>
                  <BoardingCard className="" key={post.id} post={post} />
                  </Link> 
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
