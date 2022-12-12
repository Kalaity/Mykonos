import {
  Col,
  Card,
  CardHeader,
  CardText,
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

import { Link } from "react-router-dom";
const UserCard = ({ el }) => {
  console.log (el)
  return (
    <Col sm="8" md="7" className="my-3">
      <Card>
        <CardHeader className="p-4 d-flex justify-content align-items-center ">
          <CardText
            style={{
              width: "50px",
              height: "60px",
              fontSize: "1.5em"
            
            }}
            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
          >
            {el.name[0]}
          </CardText>
          <ListGroup flush className="w-50">
            <ListGroupItem>{el.name}</ListGroupItem>
            <ListGroupItem>{el.email}</ListGroupItem>
            <ListGroupItem>{el.username}</ListGroupItem>

            <Button className="px-o bg-info" color="link">
              <Link to={`/profile/${el.id}`}>Check out Profile</Link>
            </Button>

          </ListGroup>
        </CardHeader>
        
      </Card>
    </Col>
  );
};
export default UserCard;
