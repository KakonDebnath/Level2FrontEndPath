import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UserContainer = () => {
  const { data, error, isLoading } = useUserData();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [data, setData] = useState([]);

  // const url = "https://jsonplaceholder.typicode.com/users/";

  // const getUsers = async () => {
  //   try {
  //     setIsLoading(true);
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(true);
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const props = {
    data,
    error,
    isLoading,
  };

  return <UserList {...props} />;
};

export default UserContainer;
