import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-[#FEAF01]  bg-opacity-65">
      {" "}
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export { Loader };
