import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import ItemData from "./ItemData";

import Item from "./Item";

export default function GridData(props) {

  let list = <></>;
  let achievementData = props.data;

  try {
  list = achievementData.map((data) => (
    <>
      <Grid key={data.name} xs={4}>
          <Item sx={{backgroundColor: "black"}}>
            <h2 id="dataKey">{data.name}</h2>
            <ItemData props={data}></ItemData>
          </Item>
        </Grid>
    </>
  ));
  }
  catch (e) {
    console.log("Error Loading Achievements: ", props.data)
  }

  return (
    <>
    <Box
      sx={{
        width: "75%",
        position: "absolute",
        marginTop: "48vh",
        marginLeft: "12vw",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {list}
      </Grid>
    </Box>
    </>
  );
}
