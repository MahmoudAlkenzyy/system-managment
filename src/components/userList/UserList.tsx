import { FaPen } from "react-icons/fa";
import { useAllUsers } from "../../custom/useAllUsers";
import { MdDeleteForever } from "react-icons/md";
import { UserRow } from "../index";
import { userInterface } from "../../types";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

const UserList = () => {
  const { AllUsers, isLoading } = useAllUsers();
  console.log({ AllUsers });
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  if (isLoading) return <Loader />;
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Enroll Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date of admission
              </th>

              <th scope="col" className="px-6 py-3">
                <span className="sr-only">
                  <FaPen />
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">
                  <MdDeleteForever />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {AllUsers?.slice((currentPage - 1) * 5, currentPage * 5).map((user: userInterface, idx: number) => {
              return <UserRow key={idx} user={user} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="flex py-5 overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default UserList;
