const Logo = ({ Image }) => {
  return (
    <div className="flex justify-center items-center bg-[#DCDCDC] w-full h-full p-4">
      <div className="rounded-full h-64 w-64 border-8 border-gray-200  flex items-center justify-center not-visited:">
        <img
          src={Image}
          alt="logo"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Logo;
