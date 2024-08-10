const Links = (props) => {
  return (
    <div>
      <div className="mt-4 px-4">
        <a href={props.url} target="_blank">
          <div className="bg-[#EBEEF1] rounded-lg flex justify-center py-4 text-[1.07rem] transform transition duration-150 hover:scale-105 ">
            <div className="font-semibold">{props.name}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Links;
