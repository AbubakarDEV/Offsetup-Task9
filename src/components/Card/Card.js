import React, { useState, useEffect } from 'react';
import useStyles from "./style";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SubCard from './SubCard/SubCard';
import axios from "axios";
var subID = 1
const Cardd = ({ mainData, handleDelete }) => {
  const classes = useStyles();
  const [subform, setsubform] = useState({
    SubID: subID,
    mainID: mainData.id,
    Title: "",
    Assign: "",
    Description: ""
  });
  const [subData_array, setsubData_array] = useState([])
  const [open, setOpen] = useState(false);
  const [renderAssign, setrenderAssign] = useState([])
  const [toggleSubmit, settoggleSubmit] = useState(true)
  // const initialFormState = { SubID: null, mainID: null, Title: '',Assign:'',Description:'' }
  // const [currentUser, setCurrentUser] = useState(initialFormState)
  const handleClose = () => {
    setOpen(false);
  };
  const handleSub_details_btn = () => {
    setOpen(true);

  }

  const onChange = (e) => {
    const value = e.target.value
    setsubform({
      ...subform, [e.target.name]: value, SubID: subID, mainID: mainData.id
    })

  }

  function getusers() {
    axios.get('http://60d057db7de0b2001710859d.mockapi.io/users')
      .then(function (response) {
        setrenderAssign(response.data)
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const delete_sub_card = (subID) => {
    console.log("inside sub delete")
    const updateList = subData_array.filter(item => item.SubID !== subID);
    setsubData_array(updateList)
  }
  const edit_sub_card = (subdata_edit) => {
    const { SubID, mainID, Title, Assign, Description } = subdata_edit;
    let newedititem = subData_array.find((elem) => {
      return elem.SubID == SubID
    })
    // console.log(newedititem)
    // setEditing(true)
    subform.Title=newedititem.Title
    setOpen(true)
    // setsubData_array([...subData_array,newedititem])
    // setsubData_array({ SubID: SubID, mainID: mainID, Title: Title,Assign:Assign,Description:Description })

  }
  useEffect(() => {
    getusers()
  }, [])

  const addbtn_modal = () => {
    setsubData_array([...subData_array, subform])
    subID = subID + 1
    setsubform("")
    setOpen(false);
  }

  return (
    <>
      <Grid item className={classes.Grid} md={4} sm={6} xl={4} xs={12}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <TextField
                className={classes.input}
                label="Add Title"
                variant="outlined"
                value={subform.Title}
                type="text"
                name="Title"
                onChange={(e) => onChange(e)}
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Assign To</InputLabel>
                <Select
                  name="Assign"
                  value={subform.Assign}
                  onChange={(e) => onChange(e)}
                >
                  {renderAssign.map((item) => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>

                  })}
                  {/* <MenuItem value={"MR.Talha"}>Mr.Talha</MenuItem> */}
                  {/* <MenuItem value={"MR.Rizwan"}>Mr.Rizwan</MenuItem> */}
                </Select>
              </FormControl>
              <TextField
                className={classes.input}
                label="Add Description"
                variant="outlined"
                name="Description"
                value={subform.Description}
                type="text"
                onChange={(e) => onChange(e)}
              />
              <Button size="large" variant="contained" onClick={() => addbtn_modal()}>Add</Button>
            </div>
          </Fade>
        </Modal>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.id} variant="subtitle1" color="inherit" gutterBottom>
              {mainData.id}
            </Typography>
            <Typography className={classes.title} variant="h4" color="inherit" >
              {mainData.title}
            </Typography>
            <Typography className={classes.date} variant="h6" component="h2">
              {mainData.setdate}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={() => handleSub_details_btn()}>Add Sub Details</Button>
            <Button size="small" variant="contained" onClick={() => handleDelete(mainData.id)}>Delete</Button>
          </CardActions>
        </Card>
        {/* sub cards */}
        <Container className={classes.Container}>
          {
            subData_array.map((item) => {
              return <SubCard key={item.SubID} handleEdit={edit_sub_card} handleDelete={delete_sub_card} subData={item} />
            })
          }
        </Container>
      </Grid>
    </>
  );
}

export default Cardd