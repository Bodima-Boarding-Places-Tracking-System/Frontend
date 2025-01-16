// import {
//   Banknote,
//   BedSingle,
//   MapPin,
//   Search,
//   Star,
//   UserRound,
// } from "lucide-react";
// import PointIcon from "./PointIcon";
// import { Button } from "./ui/button";
// const BoardingCard = ({ boarding }) => {
//   return (
//     <div className="p-2 h-fit w-full">
//       <div className="flex flex-col md:flex-row items-center gap-3">
//         <img
//           src={boarding.imageUrl}
//           alt={boarding.name}
//           title={boarding.name}
//           className="w-full h-52 md:w-40 md:h-32 self-start object-cover rounded "
//         />
//         <div className="flex flex-col flex-1 gap-4">
//           <div className="flex flex-col gap-2 flex-1">
//             <div className="flex items-center justify-between">
//               <h1 className="text-[1.25rem] font-bold text-secondary-700">
//                 {boarding.name}
//               </h1>
//               <p className="hidden md:block text-[0.875rem] text-slate-500">
//               Posted on {boarding.datePosted}
//             </p>
//             </div>
//             <div className="flex flex-col gap-1">
//               <p className="">{boarding.address}</p>
//               <p className="">{boarding.contactNumber}</p>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4 gap-y-2 flex-wrap text-[0.925rem]  text-slate-500">
//                 {boarding.rating.count > 0 && (
//                   <PointIcon
//                     text={`${boarding.rating.value} (${boarding.rating.count})`}
//                   >
//                     <Star className="" />
//                   </PointIcon>
//                 )}
//                 <PointIcon
//                   text={boarding.distanceToUniversity + " to University"}
//                 >
//                   <MapPin />
//                 </PointIcon>
//                 <PointIcon text={"For " + boarding.reservedFor}>
//                   <UserRound />
//                 </PointIcon>
//                 {boarding.monthlyFee && (
//                   <PointIcon text={"Rs " + boarding.monthlyFee + "/Month"}>
//                     <Banknote />
//                   </PointIcon>
//                 )}
//                 <PointIcon text={boarding.beds + " Beds"}>
//                   <BedSingle />
//                 </PointIcon>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-4 lg:gap-8">
//             <p className=" md:hidden text-[0.875rem] text-slate-500">
//               Posted on {boarding.datePosted}
//             </p>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-[1rem] md:flex text-secondary-700 w-full md:w-fit"
//             >
//               More info
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoardingCard;

// import {
//   Banknote,
//   BedSingle,
//   Bookmark,
//   Calendar,
//   MapPin,
//   UserRound,
// } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";

// const BoardingCard = ({ boarding }) => {
//   return (
//     <div className={`p-4 h-fit w-full border rounded-lg ${boarding.isFeatured ? "border-green-500 bg-green-50":"bg-white"}`}>
//       <div className="flex flex-col gap-3">
//         <div className="flex items-center gap-4">
//           <img
//             src={boarding.imageUrl}
//             alt={boarding.name}
//             title={boarding.name}
//             className="w-20 h-16 min-w-20 md:min-w-24 md:w-24 md:h-20 self-start object-cover ring-1 ring-offset-2 ring-secondary-100 rounded "
//           />
//           <div className=" flex justify-between items-start flex-1">
//             <div className="flex flex-col">
//               <Badge variant={"outline"} className={"w-fit border-green-500 text-green-500 bg-green-50 mb-1"}>
//                 Featured
//               </Badge>
//               <h1 className="text-[1.05rem] md:text-[1.125rem] font-bold text-secondary-700">
//                 {boarding.name}
//               </h1>
//               <p className="text-[0.875rem]">{boarding.address}</p>
//             </div>
//             {/* <Bookmark className="size-5 text-slate-500" /> */}
//           </div>
//         </div>
//         <hr className="my-1" />
//         <div className="flex items-center gap-2 flex-wrap">
//           <Badge
//             variant={"outline"}
//             className="text-slate-500 font-medium gap-1"
//           >
//             <Banknote className="size-3" />
//             Rs {boarding.monthlyFee}
//           </Badge>
//           <Badge
//             variant={"outline"}
//             className="text-slate-500 font-medium gap-1"
//           >
//             <UserRound className="size-3" />
//             For {boarding.reservedFor}
//           </Badge>
//           <Badge
//             variant={"outline"}
//             className="text-slate-500 font-medium gap-1"
//           >
//             <BedSingle className="size-3" /> {boarding.beds} Beds
//           </Badge>
//           <Badge
//             variant={"outline"}
//             className="text-slate-500 font-medium gap-1"
//           >
//             <MapPin className="size-3" />
//             {boarding.distanceToUniversity} km from University
//           </Badge>
//         </div>
//         <div>
//           <p>{boarding.description}</p>
//         </div>
//         <hr className="my-1" />
//         <div className="flex justify-between items-center">
//           <div className="text-sm text-slate-400 flex items-center gap-2">
//             <Calendar className="size-4" />
//             <span>Posted on {boarding.datePosted}</span>
//           </div>
//           <Button
//             size=""
//             variant="outline"
//             className="text-[1rem] md:flex text-secondary-700"
//           >
//             More info
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

import {
  Banknote,
  BedSingle,
  Bookmark,
  Calendar,
  MapPin,
  UserRound,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const BoardingCard = ({ boarding }) => {
  const navigate = useNavigate();

  const viewAd = () => {
    navigate(`/ad/${boarding.id}`)
  }
  return (
    <div
      className={`p-4 h-fit w-full border rounded-lg ${
        boarding.isFeatured ? "border-green-500 bg-green-50" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src={boarding.imageUrl}
              alt={boarding.name}
              title={boarding.name}
              onClick={viewAd}
              className="w-full h-44 md:h-36 min-w-20 self-start object-cover ring-1 ring-offset-2 ring-secondary-100 rounded cursor-pointer"
            />
            <Badge
              variant={"secondary"}
              className={"absolute top-2 right-2 w-fit  mb-1"}
            >
              Featured
            </Badge>
          </div>
          <div className=" flex justify-between items-start flex-1">
            <div className="flex flex-col gap-1">
              {/* <Badge
                variant={"outline"}
                className={
                  "w-fit border-green-500 text-green-500 bg-green-50 mb-1"
                }
              >
                Featured
              </Badge> */}
              <h1 className="text-[1.15rem] md:text-[1.125rem] font-bold text-secondary-700">
                {boarding.name}
              </h1>
              <p className="text-sm">{boarding.address}</p>
              {/* <div className="mt-2 text-slate-400">
                <p>{boarding.description}</p>
              </div> */}
            </div>
            {/* <Bookmark className="size-5 text-slate-500" /> */}
          </div>
        </div>
        <hr className="my-1" />

        <div className="flex items-center gap-2 flex-wrap">
          <Badge
            variant={"outline"}
            className="text-slate-500 font-medium gap-1"
          >
            <Banknote className="size-3" />
            Rs {boarding.monthlyFee}
          </Badge>
          <Badge
            variant={"outline"}
            className="text-slate-500 font-medium gap-1"
          >
            <UserRound className="size-3" />
            For {boarding.reservedFor}
          </Badge>
          <Badge
            variant={"outline"}
            className="text-slate-500 font-medium gap-1"
          >
            <BedSingle className="size-3" /> {boarding.beds} Beds
          </Badge>
          <Badge
            variant={"outline"}
            className="text-slate-500 font-medium gap-1"
          >
            <MapPin className="size-3" />
            {boarding.distanceToUniversity} km from University
          </Badge>
        </div>

        <hr className="my-1" />
        <div className="flex justify-between items-center">
          <div className="text-sm text-slate-400 flex items-center gap-2">
            <Calendar className="size-4" />
            <span> {boarding.datePosted}</span>
          </div>
          <Button
            size=""
            variant="outline"
            className="text-[1rem] hidden md:flex text-secondary-700"
            onClick={() => {viewAd()}}
          >
            More info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardingCard;
