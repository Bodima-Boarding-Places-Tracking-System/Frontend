import BoardingCard from "@/components/BoardingCard";
import ContactMenu from "@/components/ContactMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PointIcon from "@/components/PointIcon";
import { Badge } from "@/components/ui/badge";
import { boardingPlaces } from "@/data/sample";
import {
  Banknote,
  BedSingle,
  Calendar,
  Home,
  MapPin,
  Star,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BoardingPage = () => {
  const { adId } = useParams();
  const [boardingPlace, setBoardingPlace] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const boardingPlace = boardingPlaces.find(
      (place) => place.id === parseInt(adId)
    );
    setBoardingPlace(boardingPlace);
  }, [adId]);

  return (
    <>
      <Header />
      <main>
        <div className="min-h-[92vh]">
          <div className="lg:max-w-6xl mx-auto px-8 lg:px-6 pt-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex flex-col gap-0 flex-1 justify-center">
                <div>
                  <div className="flex items-center gap-2">
                    <Link to={"/"}>
                      <Home className="text-primary-500" size={20} />
                    </Link>
                    <span>/</span>
                    <span>{boardingPlace.name}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 justify-between">
                    <h1 className="text-[2.75rem] md:text-[3rem] font-bold">
                      {boardingPlace.name}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 ">
                      <Calendar size={16} />
                      Posted on {boardingPlace.datePosted}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 mt-4">
                  <div className="flex flex-col gap-4 flex-1 justify-center">
                    <div className="flex flex-col gap-4">
                      <img
                        src={boardingPlace.imageUrl}
                        className="h-60 md:h-[24rem] w-full object-cover rounded-lg"
                        alt={boardingPlace.name}
                        title={boardingPlace.name}
                      />
                      <div className="flex flex-row gap-4 overflow-x-scroll md:overflow-hidden scroll-smooth">
                        <img
                          src={boardingPlace.imageUrl}
                          className="w-24 h-16 min-w-20 object-cover rounded-lg border-2 cursor-pointer hover:border-primary-500"
                          alt={boardingPlace.name}
                          title={boardingPlace.name}
                        />
                        <img
                          src={boardingPlace.imageUrl}
                          className="w-24 h-16 min-w-20 object-cover rounded-lg border-2 cursor-pointer hover:border-primary-500"
                          alt={boardingPlace.name}
                          title={boardingPlace.name}
                        />
                        <img
                          src={boardingPlace.imageUrl}
                          className="w-24 h-16 min-w-20 object-cover rounded-lg border-2 cursor-pointer hover:border-primary-500"
                          alt={boardingPlace.name}
                          title={boardingPlace.name}
                        />
                        <img
                          src={boardingPlace.imageUrl}
                          className="w-24 h-16 min-w-20 object-cover rounded-lg border-2 cursor-pointer hover:border-primary-500"
                          alt={boardingPlace.name}
                          title={boardingPlace.name}
                        />
                        <img
                          src={boardingPlace.imageUrl}
                          className="w-24 h-16 min-w-20 object-cover rounded-lg border-2 cursor-pointer hover:border-primary-500"
                          alt={boardingPlace.name}
                          title={boardingPlace.name}
                        />
                      </div>
                    </div>
                    {/* Ad content */}
                    <div className="flex flex-1 flex-col gap-4 md:flex-row relative">
                      <div className="flex flex-1 h-fit flex-col bg-white p-[1.5rem] rounded-lg">
                        {/* Description */}
                        <div className="flex flex-1 flex-col gap-4">
                          <h1 className="text-[1.25rem] md:text-[1.5rem] font-bold">
                            Description
                          </h1>
                          <div>{boardingPlace.description}</div>
                          <div className="flex items-center flex-1 h-fit justify-between">
                            <div className="flex flex-1 items-center flex-wrap gap-x-6 gap-y-4 text-slate-500">
                              {boardingPlace.rating &&
                                boardingPlace.rating.count > 0 && (
                                  <PointIcon
                                    text={`${boardingPlace.rating.value} (${boardingPlace.rating.count})`}
                                  >
                                    <Star className="" />
                                  </PointIcon>
                                )}
                              <PointIcon
                                text={
                                  boardingPlace.distanceToUniversity +
                                  " to University"
                                }
                              >
                                <MapPin />
                              </PointIcon>
                              <PointIcon
                                text={"For " + boardingPlace.reservedFor}
                              >
                                <UserRound />
                              </PointIcon>
                              {boardingPlace.monthlyFee && (
                                <PointIcon
                                  text={
                                    "Rs " + boardingPlace.monthlyFee + "/Month"
                                  }
                                >
                                  <Banknote />
                                </PointIcon>
                              )}
                              <PointIcon text={boardingPlace.beds + " Beds"}>
                                <BedSingle />
                              </PointIcon>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex lg:hidden flex-1 h-fit md:sticky md:top-24 md:max-w-[30%]">
                        <ContactMenu
                          ownerName={"Lahiru Nanayakkara"}
                          address={boardingPlace.address}
                          phone={boardingPlace.contactNumber}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex flex-col h-fit flex-1 md:max-w-[28%]">
                    <div className="hidden lg:flex lg:flex-col gap-6 flex-1 h-fit">
                      <ContactMenu
                        ownerName={"Lahiru Nanayakkara"}
                        address={boardingPlace.address}
                        phone={boardingPlace.contactNumber}
                      />
                      <div className="flex flex-col gap-4 p-[1.25rem] border rounded-lg bg-white">
                        <h1 className="text-[1.25rem] md:text-[1.4rem] font-bold">
                          Similar Places
                        </h1>
                        <BoardingCard boarding={boardingPlace} />
                        <BoardingCard boarding={boardingPlace} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BoardingPage;
