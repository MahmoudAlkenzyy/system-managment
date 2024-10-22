import { UserForm } from "../index";

const AddUser = ({ type }: { type: string }) => {
  return (
    <div className="px-5">
      <h2 className="py-2 font-bold">{type == "update" ? "Update User" : "Add User"}</h2>
      <hr />
      <UserForm type={type} />
    </div>
  );
};

export default AddUser;
