const Footer = () => {
  return (
    <div className=" mt-10 mb-3">
      <div className="flex flex-col items-center font-semibold text-gray-600">
        <a
          href="https://github.com/rinkitadhana/LinkFree/blob/master/README.md"
          target="_blank"
        >
          <div className="bg-black/70 cursor-pointer hover:bg-black/60 font-semibold text-white rounded-lg p-2 mb-5">
            Make your Link<span className=" text-green-500">It</span>
          </div>
        </a>
        <div>Let's LinkIt up!</div>
        <div>©2024 LinkIt || All Rights Reserved</div>
        <div>
          Made by{" "}
          <a
            href="https://github.com/rinkitadhana"
            target=" _blank"
            className="text-green-500"
          >
            therinkit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
