import { SiBuymeacoffee } from "react-icons/si";

const Coffee = () => {
  return (
    <div className=" fixed md:right-10 md:bottom-10 right-5 bottom-5">
      <a href="" target="_blank">
        <div className=" rounded-full md:size-16 size-14 bg-zinc-200 backdrop-blur-lg flex justify-center items-center md:text-2xl text-xl hover:bg-yellow-400 cursor-pointer">
          <SiBuymeacoffee />
        </div>
      </a>
    </div>
  );
};

export default Coffee;
