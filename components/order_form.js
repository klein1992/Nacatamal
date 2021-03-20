import "date-fns";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25%",
    },
    button: {
      margin: theme.spacing(1),
      paddingLeft: "50px",
    },
  },
}));

const handleFormSubmit = async (event) => {
  event.preventDefault();
  const response = await fetch("/api/orderSubmit", {
    body: JSON.stringify({
      firstName: `${event.target.firstName.value}`,
      lastName: `${event.target.lastName.value} `,
      email: `${event.target.email.value} `,
      pickUpDate: `${event.target["date-picker-inline"].value} `,
      pickUpTime: `${event.target["time-picker"].value} `
    }), 
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
};

export default function OrderForm() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#556cd6" }}>Ordene Ya!</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "15%",
            paddingRight: "15%",
          }}
        >
          <TextField
            id="firstName"
            InputLabelProps={{ shrink: true }}
            label="Nombre"
            required
            variant="outlined"
          />
          <TextField
            id="lastName"
            InputLabelProps={{ shrink: true }}
            label="Apellido"
            required
            variant="outlined"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "15%",
            paddingRight: "15%",
          }}
        >
          <TextField
            id="email"
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Email"
            required
            variant="outlined"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Fecha Para Recoger"
                value={selectedDate}
                onChange={handleDateChange}
                InputLabelProps={{
                  shrink: true,
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Hora De Recoger"
                value={selectedDate}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <div style={{ paddingLeft: "15%" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
            startIcon={<SendIcon />}
          >
            Completa Orden
          </Button>
        </div>
      </form>
    </div>
  );
}
