import { Box, TextField, Typography, LinearProgress } from "@mui/material";
import React, { useState } from "react";

function getPasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", value: 25, color: "error" };
  if (score === 2) return { label: "Medium", value: 50, color: "warning" };
  if (score === 3) return { label: "Strong", value: 75, color: "info" };
  if (score === 4)
    return { label: "Very Strong", value: 100, color: "success" };
  return { label: "Weak", value: 0, color: "error" };
}

function PasswordStrengthCheck() {
  const [password, setPassword] = useState("");
  const strength = getPasswordStrength(password);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"50vh"}
      flexDirection={"column"}
    >
      <Typography mb={5} component="h3" fontSize={"30px"} fontWeight={600}>
        Password Strength Check
      </Typography>
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        size="small"
        style={{ width: "40%" }}
        placeholder="Enter password..."
      />
      {password && (
        <Box width="40%" mt={2}>
          <LinearProgress
            variant="determinate"
            value={strength.value}
            color={strength.color}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography mt={1} color={strength.color + ".main"}>
            {strength.label}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default PasswordStrengthCheck;
