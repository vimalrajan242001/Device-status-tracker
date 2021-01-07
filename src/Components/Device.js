import React, { useState } from "react";
import { Chip, makeStyles, TextField, Button, } from "@material-ui/core";
import axios from "axios";
import  "./css/Device.module.css";
import { Table } from 'antd';
import 'antd/dist/antd.css';
// material UI styling
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
// material UI styling end
function Device() {
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [Data, setData] = useState([]);
  function fetchApi() {
  var i = 0
  while(i<10){
    axios
      .post("http://localhost:4000/devices/", {
        devices: tags,
      })
      .then((res) => {
        setData(prevData=> {return [res.data,...prevData]})
        console.log(Data);
      })
      .catch((err) => console.log(err));
      i++
    }
    }
const columns = [
  {
    title: 'UpdatedAt',
    dataIndex: 'updatedat',
    key: 'updatedat',
  },
  {
    title: tags[0],
    dataIndex: tags[0],
    key: 'device1',
  },
  {
    title: tags[1],
    dataIndex: tags[1],
    key: 'device2',
  },
];

    function runApi(){
  setInterval(() => {}, 1000);
}
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
      />
      <br />
      <small>Hit enter to add device</small>
      <ul className={classes.root}>
        {tags.map((tag) => (
          <li className="Tag" key={tag}>
            <Chip label={tag} className={classes.chip} />
          </li>
        ))}
      </ul>
      <Button
        variant="contained"
        onClick={fetchApi}
        size="medium"
        color="primary"
      >
        Monitor
      </Button>
       <Table dataSource={Data} columns={columns} />
      {/* {Data} */}
    </div>
  );
}

export default Device;
