import React from "react";

import { Divider, List, ListItem } from "@mui/material";

export default function ItemData(props, name) {
  const list = props.props.map((data) => (
    <>
      <ListItem sx={{ display: "flex", alignItems: "center", height: "7vh" }}>
        <h1 id="key" style={{ color: data.color }}>{data.name}</h1>
      </ListItem>
      <Divider></Divider>
    </>
  ));

  return (
    <List>
      <ListItem
        sx={{ display: "flex", alignItems: "center", height: "7vh" }}
      ></ListItem>
      <Divider></Divider>
      {list}
    </List>
  );
}
