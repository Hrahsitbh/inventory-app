import React from "react";
import { Grid2 as Grid, Card, CardContent, Typography } from "@mui/material";
import { widgetTitleMap } from "../../utils/constants";

const MainWidgets = ({ data }) => {
  if (!data) return null;
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: 2, justifyContent: "space-around" }}
    >
      {Object.entries(data).map(([key, value]) => (
        <Grid item xs={12} sm={6} md={3} key={key} sx={{ flexBasis: "200px" }}>
          <Card sx={{ backgroundColor: "#00980c6b", color: "#fff" }}>
            <CardContent>
              <Typography variant="h6">{widgetTitleMap[key]}</Typography>
              <Typography variant="h5" fontWeight="bold">
                {value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainWidgets;
