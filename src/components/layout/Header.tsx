import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Hello There
        </Typography>
        <Link href="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link href="/TimothyLanziResume.pdf">
          <Button color="inherit">Resume</Button>
        </Link>
        {/* <Button color="inherit">About</Button> */}
      </Toolbar>
    </AppBar>
  )
}