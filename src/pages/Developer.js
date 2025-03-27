import React, { useEffect, useState } from "react";

const Developer = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/developers")
      .then((response) => response.json())
      .then((data) => setDevelopers(data))
      .catch((error) => console.error("Error fetching developers:", error));
  }, []);

  return (
    <div>
      <h2>Developers</h2>
      <ul>
        {developers.map((dev) => (
          <li key={dev.id}>{dev.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Developer;