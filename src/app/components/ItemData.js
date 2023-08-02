import { Divider, List, ListItem } from "@mui/material";

export default function ItemData(props) {
  let list = <></>;
  try {
    list = props.props.data.map((data) => (
      <div key={data.name} style={{ borderRadius: "20px", borderStyle: "solid", borderWidth: "0px", backgroundColor: data.color }}>
        <ListItem sx={{ display: "flex", alignItems: "center", height: "8vh", gap: "10px" }}>
          <h1 id="key">{data.name}</h1>
        </ListItem>
        <Divider></Divider>
      </div>
    ));
  }
  catch (e) {
    console.log("Error Loading Achievements: ", props.props.data);
  }

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
