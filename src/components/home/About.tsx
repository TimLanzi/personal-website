import React from "react";
import { Paper, Container, Typography } from "@material-ui/core";
import styles from "@/styles/About.module.scss";

export default function About() {
  return (
    <Paper className={styles.about}>
      <Container>
        <Typography variant="h3">About Me</Typography>
        <Typography variant="body1">
          I'm a full stack developer with experience in areas such as Web Applications, Server management, and Web API's. I am proficient in several defferent programming languages, and I always welcome the challenge of learning something new.
        </Typography>
      </Container>
    </Paper>
  )
}