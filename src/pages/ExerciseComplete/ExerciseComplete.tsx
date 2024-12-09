import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ExerciseComplete = () => {
  const job1 = window.localStorage.getItem("question_1_answer") ?? "";
  const adjective2 = window.localStorage.getItem("question_2_answer") ?? "";
  const name3 = window.localStorage.getItem("question_3_answer") ?? "";
  const emotion4 = window.localStorage.getItem("question_4_answer") ?? "";
  const verb5 = window.localStorage.getItem("question_5_answer") ?? "";
  const place6 = window.localStorage.getItem("question_6_answer") ?? "";
  const food7 = window.localStorage.getItem("question_7_answer") ?? "";
  const object8 = window.localStorage.getItem("question_8_answer") ?? "";
  const adjective9 = window.localStorage.getItem("question_9_answer") ?? "";
  const animal10 = window.localStorage.getItem("question_10_answer") ?? "";
  const exclamation11 = window.localStorage.getItem("question_11_answer") ?? "";
  const tool12 = window.localStorage.getItem("question_12_answer") ?? "";
  const color13 = window.localStorage.getItem("question_13_answer") ?? "";
  const clothingItem14 =
    window.localStorage.getItem("question_14_answer") ?? "";
  const emotion15 = window.localStorage.getItem("question_15_answer") ?? "";
  const food16 = window.localStorage.getItem("question_16_answer") ?? "";
  const adjective17 = window.localStorage.getItem("question_17_answer") ?? "";

  return (
    <Grid container>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        size="grow"
      >
        <Box>
          <h3>
            A Day in the Life of a{" "}
            <span className="answerText">{job1 == "" ? "_____" : job1}</span>
          </h3>
          <Box>
            One{" "}
            <span className="answerText">
              {adjective2 == "" ? "_____" : adjective2}
            </span>{" "}
            morning,{" "}
            <span className="answerText">{name3 == "" ? "_____" : name3}</span>{" "}
            woke up feeling{" "}
            <span className="answerText">
              {emotion4 == "" ? "_____" : emotion4}
            </span>
            . Today was the big day — they had to{" "}
            <span className="answerText">{verb5 == "" ? "_____" : verb5}</span>{" "}
            at the{" "}
            <span className="answerText">
              {place6 == "" ? "_____" : place6}
            </span>{" "}
            by noon. After eating a quick breakfast of{" "}
            <span className="answerText">{food7 == "" ? "_____" : food7}</span>,
            they grabbed their{" "}
            <span className="answerText">
              {object8 == "" ? "_____" : object8}
            </span>{" "}
            and headed out. On the way, they encountered a{" "}
            <span className="answerText">
              {adjective9 == "" ? "_____" : adjective9}
            </span>{" "}
            <span className="answerText">
              {animal10 == "" ? "_____" : animal10}
            </span>{" "}
            blocking the road. “
            <span className="answerText">
              {exclamation11 == "" ? "_____" : exclamation11}
            </span>
            !” they shouted. Luckily, they had a{" "}
            <span className="answerText">
              {tool12 == "" ? "_____" : tool12}
            </span>{" "}
            in their bag and used it to clear the path. Finally arriving at the{" "}
            <span className="answerText">
              {place6 == "" ? "_____" : place6}
            </span>
            , they were greeted by their boss, who was wearing a{" "}
            <span className="answerText">
              {color13 == "" ? "_____" : color13}
            </span>{" "}
            <span className="answerText">
              {clothingItem14 == "" ? "_____" : clothingItem14}
            </span>
            . “
            <span className="answerText">{name3 == "" ? "_____" : name3}</span>
            ,” the boss said, “we need you to{" "}
            <span className="answerText">
              {verb5 == "" ? "_____" : verb5}
            </span>{" "}
            immediately!” By the end of the day,{" "}
            <span className="answerText">{name3 == "" ? "_____" : name3}</span>{" "}
            felt{" "}
            <span className="answerText">
              {emotion15 == "" ? "_____" : emotion15}
            </span>{" "}
            but proud. They celebrated with a treat of{" "}
            <span className="answerText">
              {food16 == "" ? "_____" : food16}
            </span>{" "}
            and vowed never to forget their{" "}
            <span className="answerText">
              {adjective17 == "" ? "_____" : adjective17}
            </span>{" "}
            adventure."
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExerciseComplete;
