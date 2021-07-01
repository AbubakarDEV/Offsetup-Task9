import React from 'react';
import useStyles from "./style";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

function SubCard({ subData, handleDelete, handleEdit }) {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.Grid}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h6"  >
              {subData.SubID}
            </Typography>
            <Typography className={classes.title} variant="h6"  >
              {subData.Title}
            </Typography>
            <Typography className={classes.assign} variant="h6">
              {subData.Assign}
            </Typography>
            <Typography className={classes.description} variant="h6">
              {subData.Description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={() => handleEdit(subData)}>Edit</Button>
            <Button size="small" variant="contained" onClick={() => handleDelete(subData.SubID)}>Delete</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default SubCard