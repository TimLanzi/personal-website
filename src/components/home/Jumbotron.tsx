import React from "react";
import { Paper, Typography, Grid, Container } from "@material-ui/core";
import styles from "@/styles/Jumbotron.module.scss";

export default function Jumbotron() {
  return (
    <Paper className={styles.jumbotron}>
      <Container>
        <div className={styles.title}>
          <Typography variant="h1">
            Tim Lanzi
          </Typography>
          <Typography variant="h3" className={styles.subtitle}>
            Full Stack Developer
          </Typography>
        </div>
      </Container>
    </Paper>
  )
}