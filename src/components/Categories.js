import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }
  }));

export default function Categories (props){
    
  const classes = useStyles();
    return (
        <div className="categories">
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Categories
                  </ListSubheader>
                }
                className={classes.root}
              >
            {props.categories.map(category=>{
                return <ListItem button name={category} onClick={(e)=>{ props.changeCategory(e.target);}}>
                <ListItemText primary={category} name={category}  />
              </ListItem>;
            })}
            </List>;
      
      </div>
    )
}