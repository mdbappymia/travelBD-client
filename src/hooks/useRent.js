import { useContext } from "react";
import { MyContext } from "../contexts/AllProvider";

const useRent = () => {
  return useContext(MyContext);
};

export default useRent;
