import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    marginBottom: "20px"
  },
  formControl: {
    marginBottom: "20px"
  },
  Subdata_grid: {
    marginTop: "10px",
    backgroundColor:"red"
  },
 
  
}));

export default useStyles