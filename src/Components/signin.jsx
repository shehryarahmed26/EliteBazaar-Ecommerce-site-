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
import { Link, Navigate, Route, Router, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, provider, signInWithPopup } from "../utils/firebase";
import { AuthContext } from "../assets/Context/AuthContext";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

const googleLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png";

const SignIn = () => {
  const {setuser} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      console.log(user);
      setEmail('')
      setPassword('')
      setfirstname('')
      setlastname('')
      navigate('/login')
    }
    catch (err) {
      console.log(err);
      
    }
    
  };

  const handleGoogleSignIn = async () => {
     let login = await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      console.log(result.user);
      setuser(result.user)
      navigate('/')
      // Navigate('/')
      
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      console.log(errorMessage);
      
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
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
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
         <img className="w-[240px] mx-auto" src="/Images/logo.PNG" alt="" />
          Sign In to Your Account
        </Typography>

        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          type="text"
          margin="normal"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          type="text"
          margin="normal"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
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
          onClick={handleSignIn}
        >
          Sign In
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "gray", cursor: "pointer" }}
        >
          Have an Account ? <Link to={'/login'} > <a href="#" className="text-blue-600">Login</a></Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <Button
            onClick={handleGoogleSignIn}
            fullWidth
            variant="outlined"
            sx={{
              py: 1,
              fontWeight: "bold",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src={googleLogo}
              alt="Google Logo"
              style={{ width: "20px", height: "20px" }}
            />
            Continue with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
