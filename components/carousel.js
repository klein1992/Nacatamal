import React from "react";
import { Card, makeStyles, CardMedia } from "@material-ui/core";

export default function CarouselSlide(props) {
  const { backgroundImage } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      borderRadius: 5,
      // padding: "75px 50px",
      margin: "0px 25px",
      height: "inherit",
      width: "inherit",
      boxShadow: "20px 20px 20px black",
      // display: 'flex',
      justifyContent: "center",
    },
    media: {
      height: "inherit",
      width: "inherit",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={backgroundImage} />
    </Card>
  );
}
