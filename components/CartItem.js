import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140
    },
    card: {
        width: "25%"
    }
}));

export const CartItem = (props) => {
    const classes = useStyles();

    const { imageName, imageTitle, title, description, buttonText, buttonText2 } = props.item;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageName}
                    title={imageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {buttonText}
                </Button>
                <Button size="small" color="primary">
                    {buttonText2}
                </Button>
            </CardActions>
        </Card>
    )
}