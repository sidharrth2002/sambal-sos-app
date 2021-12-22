import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../features/counter/authSlice";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const GoogleLanding = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();

  useEffect(() => {
    let currentURL = window.location.href;
    console.log(currentURL);
    const params = new URLSearchParams(currentURL);
    const idToken = params.get("id_token");
    if (idToken !== null) {
      axios
        .post(`${process.env.REACT_APP_API_URL}auth/google`, {
          token: idToken,
        })
        .then((res) => {
          if (res.status === 201) {
            dispatch(LOGIN(res.data));
            history.push("/home");
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: "Failed to Load",
            description: "Something went wrong on our side!",
            status: "error",
            duration: 10,
            isClosable: false,
            position: "top",
          });
        });
    } else {
      console.log("no token");
    }
  }, [history]);
  return <div>Google Landing Page</div>;
};

export default GoogleLanding;
