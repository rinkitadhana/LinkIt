import Coffee from "../parts/BuyMeACofee";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Links from "../parts/Links";

const Tree = () => {
  const imgURL = "./userIMG/"; //ENTER YOUR IMG URL HERE
  const name = "User Name"; //ENTER YOUR FULL NAME HERE
  const bio = "This is your bio..."; //ENTER YOUR BIO HERE

  return (
    <div className="">
      <div className="flex justify-center md:flex-row flex-col  ">
        <div className=" md:w-2/5 ">
          <div className="flex flex-row justify-between mt-6 px-2">
            <div className=" font-bold text-green-500 text-2xl  font-bricolage ">
              <span className=" text-gray-600">Link</span>It
            </div>
            <a href="https://github.com/rinkitadhana/LinkFree" target=" _blank">
              <div className="flex flex-row gap-1 px-2 py-1 bg-black/40 w-fit items-center rounded-lg font-medium text-white text-sm hover:bg-black/30 ">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <div>on Github</div>
              </div>
            </a>
          </div>

          <Header img={imgURL} name={name} bio={bio} />

          <div>
            <Links name="Link" url="" />
            <Links name="Link" url="" />
            <Links name="Link" url="" />
          </div>
          <Footer />
        </div>
        <Coffee />
      </div>
    </div>
  );
};

export default Tree;
