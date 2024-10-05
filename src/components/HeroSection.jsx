const HeroSection = () => {
  return (
    <div className="w-full md:max-w-4xl md:mx-auto p-2 mt-2 md:mt-10">
      <div className="w-full h-[160px] md:h-[200px] relative">
        <img
          src="https://media.istockphoto.com/id/1349297974/photo/multi-ethnic-group-of-latin-american-college-students-smiling.jpg?s=612x612&w=0&k=20&c=-QDZNIqJva0oCy_sGuTkT0kjflqEShh0GmaIMLvp5dw="
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-800 bg-opacity-50 rounded-lg flex flex-col justify-center items-center gap-2">
          <h1 className="text-white text-4xl font-bold">Hello World</h1>
          <p className="text-gray-200 text-[18px] max-w-sm md:max-w-md text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
