import { FaPen } from "react-icons/fa";
import { userInterface } from "../../types";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const UserRow = ({ user }: { user: userInterface }) => {
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
        <th scope="col" className="px-6 py-3">
          <Link to={`/dashboard/editUser/${user.id}`} className="">
            <FaPen />
          </Link>
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="">
            <MdDeleteForever />
          </span>
        </th>
      </tr>
    </>
  );
};

export default UserRow;
