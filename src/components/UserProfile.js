import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setUser(null);

    // setTimeout ensures the Loading... state renders to the DOM
    // before the fetch begins — critical for Cypress intercept timing
    const timer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch user details:", error);
          setLoading(false);
        });
    }, 0);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserProfile;