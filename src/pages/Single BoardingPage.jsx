import { useLocation, useParams } from "react-router-dom";
import { HiLocationMarker, HiStar,HiPhone} from "react-icons/hi";
import BoardingCard from "../components/BoardingCard";
import SimilarLocation from "../components/SimilarLoaction";

const SingleBoardingPage = () => {
    const postId=useParams();
    const location=useLocation();
    const post=location.state?.post;
    console.log(postId);
    console.log(location);
    return (
        <div className="flex flex-row  gap-2 max-w-6xl mx-auto">
            <div className="flex flex-col mt-7 flex-1 pl-24 ">
        <div className="font-sm text-base ">
            
           <p>Home / {post&&post.name}</p>
           <h1 className="font-semibold text-3xl pb-10">{ post.name}</h1>
        </div>
        <div className="flex flex-col ">
        <img
            className="h-full  w-full object-cover mb-5"
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
            alt="Property"
          />
          <div className="flex flex-row gap-2">
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
            alt="Property"
          />
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
            alt="Property"
          />
          <img
            className="h-20 w-20 object-cover  rounded"
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
            alt="Property"
          />
          <img
            className="h-20 w-20 object-cover rounded"
            src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg"
            alt="Property"
          />
          </div>
          <h1 className="font-semibold text-2xl pb-6 mt-6">Description</h1>
          <div className="flex flex-row gap-13">
          <div className="flex items-center gap-1 flex-1 ">
              <HiStar className="text-[#003566]" />
              <p>{ post.description}</p>
            </div>
            <div className="flex items-center gap-1 flex-1">
              <HiLocationMarker className="text-[#003566]" />
              <p>2 Km from uni</p>
            </div>
            <div className="flex items-center gap-1 flex-1">
              <HiStar className="text-[#003566]" />
              <p>4 Beds, 2 Rooms</p>
            </div>
          </div>
          <div className="pb-6 mt-6 text-justify">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="">
               <h1 className="font-semibold text-2xl pb-6 mt-6">Review & Ratings</h1>
          </div>
        </div>

      </div>
      <div className="font-sm flex-1 max-w-80">
        <div className="flex flex-col ">
             <h1 className="font-semibold text-xl pb-6 mt-32">Contact Details</h1>
             <div className="flex flex-col gap-3 pb-2 pl-1">
            <div className="flex items-center gap-1 mt-2  ">
              <HiStar className="text-[#003566]" />
              <p>Lahiru Nanayakara</p>
            </div>
            <div className="flex items-center gap-1">
              <HiLocationMarker className="text-[#003566]" />
              <p>Lorem Ipsum is simply dummy</p>
            </div>
            <div className="flex items-center gap-1">
              <HiPhone className="text-[#003566]" />
              <p>0123456789</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-yellow-300 h-10 flex justify-center items-center mt-6 mb-6 rounded">
          <p className="font-semibold "> Open in Map</p>
        </div>
        <div className="flex flex-col">
        <h1 className="font-semibold text-2xl ">Description</h1>
          <div className="flex flex-row gap-5 mt-3">
          <HiPhone className="text-[#003566]" />
          <HiPhone className="text-[#003566]" />
          <HiPhone className="text-[#003566]" />
          </div>
        </div>
        <div className="flex flex-col bg-slate-300">
        <h1 className="font-semibold text-xl pb-6 mt-9">Similar Locations</h1>
        <SimilarLocation className="" key={post.id} post={post} />
        <SimilarLocation className="" key={post.id} post={post} />
        </div>
      </div >
        </div>
      
    )
  }
  
  export default SingleBoardingPage;