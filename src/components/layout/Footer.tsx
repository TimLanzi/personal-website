import React from "react";
import { Paper, Grid, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <Paper className={styles.footer}>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <a href="https://www.linkedin.com/in/tim-lanzi-697828195/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={styles.linkedin} fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://github.com/TimLanzi" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className={styles.github} fontSize="large" />
          </a>
        </Grid>
      </Grid>
      <Container>
        <Typography variant="body1">
          <EmailIcon className={styles.email} /> trlanzi@gmail.com
        </Typography>
      </Container>
    </Paper>
  );
}