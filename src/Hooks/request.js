import { useState, useEffect } from "react";
import axios from "axios";
import { NotificationManager } from "react-notifications";

export const communication = async ({ url, data }) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      accept: "application/json",
    },
  });

  await instance(url, {
    method: "post",
    data: data,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      const errResponse = error.response.data.errors;
      let errs = "";
      console.log("errror ", errResponse);

      for (const err in errResponse) {
        errs += errResponse[err][0] + "\n";
      }
      console.log("errror ", errs);
    });
};

export const makeRequestWithData = ({ url, data, reset, setIsLoading }) => {
  console.log("url ", url);
  axios
    .post(`${process.env.REACT_APP_BASE_URL}${url}`, data, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        NotificationManager.success("Added Successfully", "Success");
        setIsLoading(false);
        reset();
      }
    })
    .catch((error) => {
      const errResponse = error.response.data.errors;
      for (const err in errResponse) {
        NotificationManager.error(errResponse[err][0], "Error");
      }
      setIsLoading(false);
    });
};

export const useMakeRequestForData = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}${url}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((response) => {
        setResponseData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        NotificationManager.error("Fetching data failed. Try again..", "Error");
      });
  }, []);

  return {
    isLoading,
    responseData,
  };
};
