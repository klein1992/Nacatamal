import OrderForm from "../components/order_form";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import CarouselSlide from "../components/carousel";
import { SLIDE_INFO } from "../slide_contents";
import { Arrow } from "../components/arrow";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import MoreIcon from '@material-ui/icons/More';
import MenuIcon from '@material-ui/icons/Menu';
import Footer from '../components/footer';
import { CartItemsContainer } from "../components/CartItemsContainer";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: 140
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
    marginLeft: "2em",
    color: "white"
  },
  carousel: {
    textAlign: "center",
    paddingTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "25%"
  }
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
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
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

      {/* <div className={classes.carousel}>

        <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
        <Slide in={slideIn} direction={slideDirection}>
          <div style={{ width: "60ch", height: "25ch", display: "flex" }}>
            <CarouselSlide content={content} />
          </div>
        </Slide>
        <Arrow direction="right" clickFunction={() => onArrowClick("right")} />
      </div> */}
      <div id="myid" style={{ background: "url('/nacatamal_vice.webp')", backgroundSize: "cover", height: "100ch", width: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ width: "50%", textAlign: "center", marginTop: "auto", paddingTop: "250px" }}>
          <strong style={{ color: "white", flex: "0 0 120px", letterSpacing: "0.5px", lineHeight: "1.5em", fontSize: "1.5em" }}>Fritanga Al Gusto es hecho para los Latinos por Latinos. A Rosa siempre le encargaban
          nacatamales hasta que por fin decidio venderlos al publico. Hecho con ingredientes 100% naturales...al gusto!
      </strong>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2b3a7e", color: "white", width: "25%", marginLeft: "40ch" }}
            type="submit"
            className={classes.button}
            startIcon={<MoreIcon />}
          >
            Aprenda Mas
          </Button>
        </div>
      </div>
      <div style={{ paddingTop: "100px", marginLeft: "2em" }}>

        {/* <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/chile_relleno.jpg"
              title="Chile relleno"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Chile Rellenito
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                El Mejor Chile Relleno que usted ha probado o se le devuelve su dinero!
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Compre ya
        </Button>
            <Button size="small" color="primary">
              Ingredientes
        </Button>
          </CardActions>
        </Card> */}
        <CartItemsContainer />
      </div>
      <div
        style={{
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingBottom: "90px"
        }}
      >
        {/* <OrderForm /> */}
      </div>
      <Footer />
    </div>
  );
}
