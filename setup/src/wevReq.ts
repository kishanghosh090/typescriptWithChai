import axios, { type AxiosResponse } from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const fetchData = async () => {
  try {
    const res: AxiosResponse<Todo[]> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const data: Todo[] = res.data;
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
};
fetchData();
