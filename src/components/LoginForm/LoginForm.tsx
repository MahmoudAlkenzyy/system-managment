// import React from "react";
// const LoginForm = ({ handleSubmit, onSubmit, register, errors }: { handleSubmit: (a: any) => void }) => {
//   return (
//     <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 -white">
//           Email
//         </label>
//         <input
//           type="text"
//           id="Username"
//           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -gray-700 -gray-600 -gray-400 -white :ring-blue-500 :border-blue-500"
//           placeholder="Enter your email"
//           {...register("username", { required: "Email is required" })}
//         />
//         {errors.username && <div>{errors.username?.message}</div>}
//       </div>
//       <div>
//         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 -white">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           placeholder="••••••••"
//           className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 -gray-700 -gray-600 -gray-400 -white :ring-blue-500 :border-blue-500"
//           {...register("password", { required: "password is required", minLength: 5 })}
//         />
//         {errors.password && <div>{`${errors.password?.message}`}</div>}
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-start">
//           <div className="flex items-center h-5">
//             <input
//               id="remember"
//               aria-describedby="remember"
//               type="checkbox"
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 -gray-700 -gray-600 :ring-primary-600 -offset-gray-800"
//             />
//           </div>
//           <div className="ml-3 text-sm">
//             <label htmlFor="remember" className="text-gray-500 -gray-300">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <a href="#" className="text-sm font-medium text-primary-600 hover:underline -primary-500">
//           Forgot password?
//         </a>
//       </div>
//       <button
//         type="submit"
//         onClick={() => {
//           console.log(errors);
//         }}
//         className="w-full bg-[#FEAF00] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -primary-600 :bg-primary-700 :ring-primary-800"
//       >
//         Sign in
//       </button>
//       <p className="text-sm font-light text-gray-500 -gray-400">
//         Don’t have an account yet?{" "}
//         <a href="#" className="font-medium text-primary-600 hover:underline ">
//           Sign up
//         </a>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;
