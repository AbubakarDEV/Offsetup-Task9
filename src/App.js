
import './App.css';
import React, { useEffect } from 'react';
import useStyles from "./style";
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Cardd from './components/Card/Card';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
var mainID = 1

function App() {
  const classes = useStyles();
  const [mainData_array, setmainData_array] = useState([])
  const [title, settitle] = useState("")
  const [date, setDate] = useState(
    { varOne: new Date() }
  )

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onChange = (e) => {
    const value = e.target.value
    settitle(value)
  }

  const delete_main_card = (mainID) => {
    const updateList = mainData_array.filter(item => item.id !== mainID);
    setmainData_array(updateList)
  }
  const handleMainSubmit = () => {
    if (mainData_array.length > 2) {
      setOpen(true);
    }
    else {
      var myobj = {
        id: mainID,
        setdate: date.varOne.toDateString(),
        title: title
      }
      setmainData_array([...mainData_array, myobj])

    }
    mainID++
    settitle("")
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="You Cannot Add more than 3 Main Tasks"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <main>
        <Container className={classes.Container} maxWidth="md">
          <Grid>
            <TextField
              className={classes.input}
              label="Main Task"
              variant="outlined"
              value={title}
              type="text"
              onChange={(e) => onChange(e)}
            />

            <Button
              variant="contained"
              className={classes.button}
              endIcon={<AddIcon />}
              onClick={() => handleMainSubmit()}
            >
              Add
            </Button>
          </Grid>
        </Container>

      </main>

      <Container className={classes.Container} maxWidth="md">
        <Grid
          container
          spacing={2}
          className={classes.Grid}>
          {mainData_array.map((item) => {
            return <Cardd key={item.id} handleDelete={delete_main_card} mainData={item} />
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
