import React from "react";
import { Paper, Grid, Card, Typography } from "@material-ui/core";
import ComputerIcon from '@material-ui/icons/Computer';
import StorageIcon from '@material-ui/icons/Storage';
import CodeIcon from '@material-ui/icons/Code';
import styles from "@/styles/Experience.module.scss";

export default function Experience() {
  return (
    <Paper className={styles.experience}>
      <Typography variant="h4" align="center">
        Experience
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={styles.grid_item}>
          <div className={styles.circle}>
            <ComputerIcon fontSize="large" />
          </div>
          <Typography variant="h5">
            Web Development
          </Typography>
          <Typography variant="body2">
            Full stack web applications with React.js and Typescript
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.grid_item}>
          <div className={styles.circle}>
            <StorageIcon fontSize="large" />
          </div>
          <Typography variant="h5">
            Database
          </Typography>
          <Typography variant="body2">
            Database technologies from MongoDB to MySQL
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className={styles.grid_item}>
          <div className={styles.circle}>
            <CodeIcon fontSize="large" />
          </div>
          <Typography variant="h5">
            Scripting
          </Typography>
          <Typography variant="body2">
            Workflows to automate many tasks
          </Typography>
        </Grid>
        {/* <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}></Grid> */}
      </Grid>
    </Paper>
  );
}