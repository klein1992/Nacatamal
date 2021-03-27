import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "25ch",
        backgroundColor: "#556cd6"
    },
    flex: {
        display: "flex"
    },
    iconText: {
        marginTop: "inherit",
        fontSize: "1.25em",
        marginLeft: "1em",
        color: "white",
        fontWeight: "bold"
    },
    footerText: {
        flexGrow: 1,
        marginLeft: "2em",
        color: "white"
    },
    container: {
        marginLeft: "2em",
        paddingTop: "1.5em"
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.flex}><LocationOnIcon /><p className={classes.iconText}>13710 SW 56 Street</p> </div>
                <div className={classes.flex}><EmailIcon /><p className={classes.iconText}> nacatamalalgusto@gmail.com</p></div>
                <div className={classes.flex}><PhoneIphoneIcon /> <p className={classes.iconText}>305-228-9182</p></div>
            </div>
            <Typography variant="subtitle2" className={classes.footerText}>
                &copy; 2021 Fritanga Al Gusto - All Rights Reserved. Designed By Eduardo Wheelock
          </Typography>
        </div>
    )
}