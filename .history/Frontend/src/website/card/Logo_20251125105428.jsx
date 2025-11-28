const Logo = ({ Image }) => {
  return (
    <div className="flex justify-center items-center bg-[#DCDCDC] w-full h-full">
      <div className="rounded-full h-64 w-64 border-8 border-gray-200  flex items-center justify-center not-visited:">
        <img
          src={Image}
          alt="logo"
          className="h-62 w-62 object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Logo;
