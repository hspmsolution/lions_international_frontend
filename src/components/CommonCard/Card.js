import React from 'react'
import {  Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import useStyles from "./CardStyle";




export default function Card(props) {
    const classes = useStyles();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
  return (
    <>
          <Box
                    position={"relative"}
                   sx={{flexGrow: 1}}
                  >
                    <Item>
                      <img
                        src={props.image}
                        srcSet={props.srcSet}
                        alt={props.alt}
                        className={classes.activityImage}
                        
                      />
                      <h3>{props.heading}</h3>
                      <p>{props.description}</p>
                      <p className={classes.activityDate}>{props.date}</p>
                    </Item>
                </Box>
            </>
  )
}
