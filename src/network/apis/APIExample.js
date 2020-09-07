import { axios } from "./index";
const handlerEnabled = false;

// Replace endpoint and change api name
const apiExample = async () => {
  return await axios.get(`ENDPOINT`, { handlerEnabled });
};

export default {
  apiExample
};
