import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function PostApi() {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [cuteDogImage, setCuteDogImage] = useState("");

  const dogImageApiPost = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => setCuteDogImage(res.message));
  };

  useEffect(() => {
    dogImageApiPost();
  }, []);

  return (
    <Box>
      <h1>Dog Image</h1>
      <p>Image Rending in Browers</p>
      {cuteDogImage ? (
        <img width={"400px"} src={cuteDogImage} />
      ) : (
        "Image Loading... "
      )}
      <br />
      <br />

      <form method="post" action={"#"} style={{ padding: "10px 5px" }}>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFromData(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => setFromData(e.target.value)}
        />
        <br />
        <label>phone:</label>
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFromData(e.target.value)}
        />
        <br />
        <button>Submit</button>
        <button>Reset</button>
      </form>
    </Box>
  );
}
