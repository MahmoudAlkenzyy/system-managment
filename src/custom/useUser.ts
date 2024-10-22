import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
export const useUser = () => {
  const { id } = useParams();
  const { data: user } = useQuery({
    queryFn: async () => {
      if (id) {
        const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
        return data;
      }
    },
    queryKey: [`user-${id}`],
  });
  return { user };
};
