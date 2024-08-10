const Header = (props) => {
  return (
    <div className="mt-8  mb-8">
      <div className="flex flex-col items-center gap-3">
        <div>
          <img
            className=" rounded-full size-24 transform transition duration-500 hover:scale-110 "
            src={props.img}
            alt="USERS_PROFILE_PIC"
          />
        </div>
        <div className=" flex flex-col items-center gap-1.5">
          <div className=" text-xl font-bold text-gray-700">{props.name}</div>
          <div className=" text-gray-500 font-medium md:px-0 px-2 text-justify md:text-center">
            {props.bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;