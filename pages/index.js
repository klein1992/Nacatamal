import OrderForm from "../components/order_form";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CarouselSlide from "../components/carousel";
import { SLIDE_INFO } from "../slide_contents";
import { Arrow } from "../components/arrow";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  grow: {
    flexGrow: 1
  },
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  carousel: {
    textAlign: "center",
    paddingTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));

export default function Home() {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  let content = SLIDE_INFO[index];

  console.log("the title is " + content.backgroundImage);

  const numSlides = SLIDE_INFO.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // every 10 seconds "click" on the arrow. Leaves a little to be desired...
      onArrowClick("right");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 750);
  };

  return (
    <div>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              Fritanga Al Gusto
            </Typography>
            <span>
              <a
                href="https://facebook.com/ewheelock"
                style={{ padding: "10px" }}
              >
                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
              </a>
              <a href="https://instagram.com/" style={{ padding: "15px" }}>
                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              </a>
            </span>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.carousel}>
        <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
        <Slide in={slideIn} direction={slideDirection}>
          <div style={{ width: "60ch", height: "25ch",display: "flex" }}>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
      </div>
      <div
        style={{
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingBottom: "90px"
        }}
      >
        <OrderForm />
      </div>
      <AppBar position="static" style={{ height: "15ch" }}>
        <Toolbar>
          <Typography variant="subtitle2" className={classes.title}>
          &copy; 2021 Fritanga Al Gusto - All Rights Reserved. Designed By Eduardo Wheelock
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
