import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

function QuizApp() {
  const question = "What is the capital of Canada?";
  const options = ["india", "usa", "japan", "Ottawa"];
  const correctAns = "Ottawa";
  const [submited, setSubmited] = useState(false);
  const [showAns, setShowAns] = useState(false);

  const handleClick = (option) => {
    setSubmited(option);
  };

  const handleSubmit = () => {
    setShowAns(true);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          boxShadow={3}
          p={10}
        >
          <Typography
            fontSize="24px"
            fontWeight="bold"
            fontFamily="sans-serif"
            mb={3}
            color="#333"
            textAlign="center"
          >
            {question}
          </Typography>
          {options.map((option, index) => (
            <Button
              key={index}
              fullWidth
              variant={submited === option ? "contained" : "outlined"}
              onClick={() => handleClick(option)}
            >
              {option}
            </Button>
          ))}
          
          {showAns && (
            <Typography
              mt={2}
              color={submited === correctAns ? "green" : "red"}
              textAlign="center"
              fontWeight="bold"
            >
              {submited === correctAns
                ? "Correct Answer!"
                : "Not-Correct Answer"}
            </Typography>
          )}

          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="success"
              size="medium"
              sx={{ width: "200px" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default QuizApp;
