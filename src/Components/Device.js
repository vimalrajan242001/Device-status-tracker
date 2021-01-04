import React, { useState } from "react";
import { Chip, makeStyles, TextField,Button,Paper } from "@material-ui/core";
import axios from "axios";
 import {style} from './css/Device.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
    table: {
    minWidth: 650,
  },
}));
function Device() {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [Data, setData] = useState([]);
//   useEffect(()=>{
//     const fetchApi =()=>{
//         axios.post('http://localhost:4000/devices',
//         {
//             devices:tags
//         }
//         ) .then(res => {
//           console.log(res.data)
//         })
//         .catch(err => console.log(err));
//     }
// },[])
 function fetchApi(){
        axios.post('http://localhost:4000/devices',
        {
            devices:tags
        }
        ) .then(res => {
          // setData=res.data
          // console.log(res.data)
          // setData({data:res})
          // console.log(res.data);
           let tmpArray = []
            for (var i = 0; i < res.data.length; i++) {
                tmpArray.push(data.data[i].NeededInfo)
            }
            setData(tmpArray)
        })
        .catch(err => console.log(err));
    }
    // const Component = ({ Data }) => <div>{Data}</div>
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Add Devices"
        variant="filled"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
          }
        }}
      /><br/>
<small>Hit enter to add device</small>
      <ul className={classes.root}>
        {tags.map((tag) => (
          <li className="Tag" key={tag}>
            <Chip label={tag} className={classes.chip} />
          </li>
        ))}
      </ul>
       <Button variant="contained" onClick={fetchApi} size="medium" color="primary">
          Monitor
        </Button>
        {/* {Component} */}
        {/* {Data ? {Data.map((datas)=>(<div>{datas}</div>))} : <p>Loading..</p>} */}
         {/* {Data.map((datas)=>(<div>{datas}</div>))} */}
{/* 
        <table >
  <tr>
    {tags.map((tag)=>(<th>{tag}</th>))}
    
  </tr>
  <tr>
    {Data.map((datas)=>(<th>{datas}</th>))}
  </tr>
</table> */}
    </div>
  );
}

export default Device;