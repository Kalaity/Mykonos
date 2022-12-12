import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");
  const { idUSER } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idUSER}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>{user.email}</h2>
      <h2>{user.address && user.address.street}</h2>
      <h2>{user.company && user.company.name}</h2>
    </div>
  );
};
export default Profile;