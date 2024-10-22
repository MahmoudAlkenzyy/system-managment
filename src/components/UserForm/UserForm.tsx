import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AddUserIntarface } from "../../types";
import { useParams } from "react-router-dom";
import { useUser } from "../../custom/useUser";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext/Authcontext";

const UserForm = ({ type }: { type: string }) => {
  const { id } = useParams();
  const data = useUser();
  let user = data.user;
  const authContext = useContext(AuthContext);
  if (type === "profile") {
    user = authContext?.user;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddUserIntarface>();
  const url = id ? `https://dummyjson.com/users/${id}` : "https://dummyjson.com/users/add";
  const onSubmit: SubmitHandler<AddUserIntarface> = async (val) => {
    try {
      const { data } = await axios.put(url, val);
      console.log({ data });
      toast.success(`${type} successfully`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[85%] shadow-lg relative rounded-xl p-7 pt-20 mx-auto my-20 bg-white">
      {type === "profile" && (
        <img
          src={user?.image}
          className="mx-auto absolute bg-gray-50 p-1 left-[50%] top-0 -translate-x-[50%] -translate-y-[50%] rounded-full"
        />
      )}
      <div className="flex gap-4 py-3">
        <div className=" w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("firstname", type == "add" ? { required: "first name is required", minLength: 4 } : {})}
              defaultValue={user && user.firstName}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          {errors.firstname && <div className="text-red-400">{errors.firstname?.message}</div>}
        </div>
        <div className=" w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              {...register("lastName", type == "add" ? { required: "last name is required" } : {})}
              defaultValue={user && user?.lastName}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last Name
            </label>
          </div>
          {errors.lastName && <div className="text-red-400">{errors.lastName?.message}</div>}
        </div>
      </div>
      <div className="flex gap-4 py-3">
        <div className="w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("email", type == "add" ? { required: "email is required" } : {})}
              defaultValue={user && user?.email}
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          {errors.email && <div className="text-red-400">{errors.email?.message}</div>}
        </div>
        <div className="w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("age", type == "add" ? { required: "age required" } : {})}
              defaultValue={user && user?.age}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Age
            </label>
          </div>
          {errors.age && <div className="text-red-400">{errors.age?.message}</div>}
        </div>
      </div>
      <div className="flex gap-4 py-3">
        <div className="w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              {...register("phone", type == "add" ? { required: "phone is required" } : {})}
              defaultValue={user && user?.phone}
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone Number
            </label>
          </div>
          {errors.phone && <div className="text-red-400">{errors.phone?.message}</div>}
        </div>
        <div className="w-full">
          <div className="relative z-0 w-full mb-5 group">
            <input
              disabled={type == "profile"}
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("birthDate", type == "add" ? { required: "birthDate" } : {})}
              defaultValue={user && user?.birthDate}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Birth Date
            </label>
          </div>
          {errors.birthDate && <div className="text-red-400">{errors.birthDate?.message}</div>}
        </div>
      </div>
      {type != "profile" && (
        <button className=" mx-auto block bg-[#FEAF00] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -primary-600 :bg-primary-700 :ring-primary-800">
          {type}
        </button>
      )}
    </form>
  );
};

export default UserForm;
