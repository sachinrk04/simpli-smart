import React from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./ModelSpace.scss";
import CardHeader from "../CardHeader/CardHeader";

const ModelSpace = ({ space }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <CardHeader name={space.name} avatar={space.avatar} />
          <Typography variant="body2">{space.description}</Typography>
          <div className="model-space-link">
            <Link to={`/model-space/${space.id}`}>
              <Button>View Model Space</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ModelSpace;
