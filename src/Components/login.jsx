import React, { useContext, useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../utils/firebase";
import { AuthContext } from "../assets/Context/AuthContext";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {setuser} = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      setuser(result?.user)
      navigate('/')
    }
    catch (e) {
      console.log(e);
      
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          textAlign: "center",
        }}
      > <img className="w-[240px] mx-auto" src="/Images/logo.PNG" alt="" />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login to Your Account
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1.5, fontWeight: "bold" }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "gray", cursor: "pointer" }}
        >
          Dont Have an Account ? <Link to={'/signup'}>
          <a href="#" className="text-blue-600">Signup</a>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
