import { Box, Button } from "@mui/material";
import { FaArrowLeft, FaArrowRotateLeft } from "react-icons/fa6";
import { Link, useLocation } from "wouter";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";

const InaccessibleForm = () => {
  const [, setLocation] = useLocation();
  const [startTime] = useState(Date.now());
  const [expireTime] = useState(startTime + 100000);
  const [timeLeft, setTimeLeft] = useState(100);

  function writeAnswersToLocalStorage(
    event: React.SyntheticEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDataEntries = Object.fromEntries(formData);
    const entries = Object.entries(formDataEntries);

    for (let i = 0; i < entries.length; i++) {
      window.localStorage.setItem(entries[i][0], `${entries[i][1]}`);
    }

    setLocation("/accessibility-app/exerciseComplete");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        setTimeLeft(-1);
        clearInterval(interval);
        setLocation("/accessibility-app/finish");
      } else {
        setTimeLeft(Math.floor((expireTime - Date.now()) / 1000));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, expireTime, setLocation]);

  return (
    <Box
      className="keyboardOnlyForm"
      component="form"
      method="post"
      onSubmit={writeAnswersToLocalStorage}
      sx={{ width: "25vw" }}
    >
      <Grid
        container
        display="flex"
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/accessibility-app/">
          <Button
            variant="contained"
            sx={{ width: "100px", padding: "15px" }}
            tabIndex={0}
          >
            <FaArrowLeft />
          </Button>
        </Link>
        <h2 tabIndex={1}>{timeLeft}</h2>
        <Button
          type="reset"
          variant="contained"
          sx={{ width: "100px", padding: 2 }}
          tabIndex={2}
        >
          <FaArrowRotateLeft />
        </Button>
      </Grid>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={0.5}
      >
        <Box
          component="input"
          id="question_1_answer"
          name="question_1_answer"
          className="question"
          type="text"
          placeholder="Job"
          required
          tabIndex={3}
        />
        <Box
          component="input"
          id="question_2_answer"
          name="question_2_answer"
          className="question"
          type="text"
          placeholder="Adjective"
          required
          tabIndex={4}
        />
        <Box
          component="input"
          id="question_3_answer"
          name="question_3_answer"
          className="question"
          type="text"
          placeholder="Name"
          required
          tabIndex={8}
        />
        <Box
          component="input"
          id="question_4_answer"
          name="question_4_answer"
          className="question"
          type="text"
          placeholder="Emotion"
          required
          tabIndex={9}
        />
        <Box
          component="input"
          id="question_5_answer"
          name="question_5_answer"
          className="question"
          type="text"
          placeholder="Verb"
          required
          tabIndex={11}
        />
        <Box
          component="input"
          id="question_6_answer"
          name="question_6_answer"
          className="question"
          type="text"
          placeholder="Place"
          required
          tabIndex={12}
        />
        <Box
          component="input"
          id="question_7_answer"
          name="question_7_answer"
          className="question"
          type="text"
          placeholder="Food"
          required
          tabIndex={13}
        />
        <Box
          component="input"
          id="question_8_answer"
          name="question_8_answer"
          className="question"
          type="text"
          placeholder="Object"
          required
          tabIndex={15}
        />
        <Box
          component="input"
          id="question_9_answer"
          name="question_9_answer"
          className="question"
          type="text"
          placeholder="Adjective"
          required
          tabIndex={5}
        />
        <Box
          component="input"
          id="question_10_answer"
          name="question_10_answer"
          className="question"
          type="text"
          placeholder="Animal"
          required
          tabIndex={16}
        />
        <Box
          component="input"
          id="question_11_answer"
          name="question_11_answer"
          className="question"
          type="text"
          placeholder="Exclamation"
          required
          tabIndex={17}
        />
        <Box
          component="input"
          id="question_12_answer"
          name="question_12_answer"
          className="question"
          type="text"
          placeholder="Tool"
          required
          tabIndex={18}
        />
        <Box
          component="input"
          id="question_13_answer"
          name="question_13_answer"
          className="question"
          type="text"
          placeholder="Color"
          required
          tabIndex={19}
        />
        <Box
          component="input"
          id="question_14_answer"
          name="question_14_answer"
          className="question"
          type="text"
          placeholder="Clothing Item"
          required
          tabIndex={20}
        />
        <Box
          component="input"
          id="question_15_answer"
          name="question_15_answer"
          className="question"
          type="text"
          placeholder="Emotion"
          required
          tabIndex={10}
        />
        <Box
          component="input"
          id="question_16_answer"
          name="question_16_answer"
          className="question"
          type="text"
          placeholder="Food"
          required
          tabIndex={14}
        />
        <Box
          component="input"
          id="question_17_answer"
          name="question_17_answer"
          className="question"
          type="text"
          placeholder="Adjective"
          required
          tabIndex={6}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "100%", marginY: 2, padding: 2 }}
          tabIndex={7}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default InaccessibleForm;
