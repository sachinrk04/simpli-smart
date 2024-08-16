import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

const HomePageSkeleton = ({ limit }) => {
  let limits = limit || 5;
  return (
    <Container>
      <Grid container spacing={3}>
        {[...new Array(limits).keys()].map((i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ margin: 1 }}>
                <Skeleton variant="circular">
                  <Avatar />
                </Skeleton>
              </Box>
              <Box sx={{ width: "100%" }}>
                <Skeleton width="100%">
                  <Typography variant="h3">.</Typography>
                </Skeleton>
              </Box>
            </Box>
            <Skeleton variant="rectangular" width="100%">
              <div style={{ paddingTop: "57%" }} />
            </Skeleton>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePageSkeleton;
