import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Container, Row } from "reactstrap";
import axios from "axios";

const UsersList = () => {
  const [userList, setUserList] = useState([]);
  console.log(userList);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUserList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Row>
        
          {userList.map((el) => (
            <UserCard el={el} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default UsersList;
