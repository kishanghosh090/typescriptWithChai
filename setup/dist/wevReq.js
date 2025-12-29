import axios, {} from "axios";
const fetchData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        const data = [];
        data.push(res.data);
        console.log(data);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log(error);
        }
    }
};
fetchData();
//# sourceMappingURL=wevReq.js.map