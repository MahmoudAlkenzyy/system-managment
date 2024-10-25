import { FaPen } from "react-icons/fa";
import { userInterface } from "../../types";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useState } from "react";

const UserRow = ({ user }: { user: userInterface }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <tr className="bg-white border-b text-center hover:bg-gray-50 ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          <img src={user.image} alt="" className="w-16 rounded-xl" />
        </th>
        <td className="">{`${user.firstName} ${user.lastName}`}</td>
        <td className="">{user.email}</td>
        <td className="">{user.phone}</td>
        <td className="">{user.ssn}</td>
        <td className="">{user.birthDate}</td>
        <th scope="col" className="px-4 py-3">
          <Link to={`/dashboard/editUser/${user.id}`} className="">
            <FaPen size={16} color="#FEAF01" />
          </Link>
        </th>
        <th scope="col" className="px-4 py-3">
          <button
            className=""
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <MdDeleteForever size={22} color="red" />
          </button>
        </th>
      </tr>
      <DeleteModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default UserRow;
