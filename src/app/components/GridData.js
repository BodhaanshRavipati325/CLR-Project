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
        {/* <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Liquidation Volume</h2>
            <ItemData props={volume}></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Long Investment Volume</h2>

            <ItemData props={longValue} name="longValue"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Short Investment Volume</h2>

            <ItemData props={shortValue} name="shortValue"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Rate</h2>

            <ItemData props={rate}></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">Average Price</h2>

            <ItemData props={averagePrice} name="averagePrice"></ItemData>
          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">3e3e3</h2>

          </Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <h2 id="dataKey">3e3e3</h2>

          </Item>
        </Grid> */}
      </Grid>
    </Box>
    </>
  );
}
