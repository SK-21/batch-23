import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from '../User/User';
import { Container, Row } from 'react-bootstrap';
import { useSearchParams } from "react-router-dom";
function Users() {
  const [users, setUsers] = useState([]);
  const [searchQuery] = useSearchParams();
  useEffect(() => {
    const URL = "https://dummyapi.io/data/v1/user?limit=10";
    (async () => {
      const { data } = (await axios.get(URL, { headers: { "app-id": "623f19872934031e5b0d8089" } })).data;
      console.log(data);
      setUsers(data)
    })()

  }, []);

  const searchTerm = searchQuery.get("search");
  console.log(searchTerm);
  return (
    <Container fluid>
      <Row>
        {users.filter(({ firstName, lastName }) => !searchTerm || (firstName + lastName).
        toLowerCase().includes(searchTerm)).
          map(user => <User key={user.id} user={user} />)}
      </Row>
    </Container>
  )
}

export default Users