import { NavLink } from "react-router-dom";
// import classes from"./Profile.module.css";
import { Button, Tab, Tabs, TextField } from "@material-ui/core";
import { styles } from "./style";

export const  Profile = () => {
    const classes = styles();
    return(
    <h1 className={classes.wrapper}>
        Profile component<NavLink to="/user"> User</NavLink>
        <Button 
          variant="contained" 
          color="secondary" 
          size="small" 
          className="click-btn"
          classes={{
            
          }}>
            Click me!
        </Button>
        <Button>normal</Button>
        <TextField classes={{

        }}/>
        <input/>
        <Tabs>
            <Tab classes={{selected:"selected-tab"}}>Hello</Tab>
        </Tabs>
    </h1>
    );
};