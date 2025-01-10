import BoardingList from "@/components/BoardingList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchMenu from "@/components/SearchMenu";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="min-h-[92vh]">
          <div className="lg:max-w-7xl mx-auto px-8 lg:px-6 flex flex-col gap-12">
            <div className="flex flex-col gap-0 md:max-w-lg justify-center mt-12 md:mt-16">
              <p className="text-primary font-semibold text-[1.25rem]">
                Welcome
              </p>
              <h1 className="text-[2.75rem] md:text-[3rem] font-bold max-w-[300px] md:max-w-max">
                Find Your Perfect Stay, Just a Click Away!
              </h1>
            </div>
            <SearchMenu />
            <BoardingList />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
