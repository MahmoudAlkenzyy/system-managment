import axios from "axios";
import { useQuery } from "react-query";

export const useAllUsers = () => {
  const { data: AllUsers, isLoading } = useQuery({
    queryFn: async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/users");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["All-users"],
  });
  return { AllUsers: AllUsers?.users, isLoading };
};
