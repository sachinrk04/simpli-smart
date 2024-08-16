import { CardMedia, Grid, Typography } from "@mui/material";
import "./OutputModel.scss";

export const outputModal = (output) => {
  switch (output.type) {
    case "text":
    case "number":
      return (
        <Grid item xs={12} sm={4} key={output.name}>
          <Typography variant="body2" color="textSecondary" component="p">
            {output[output.name]}:
          </Typography>
        </Grid>
      );
    case "image":
      return (
        <Grid item xs={12} sm={4} key={output.name}>
          <CardMedia
            component="img"
            image={output[output.name]}
            alt={output.name}
          />
        </Grid>
      );
    default:
      return null;
  }
};
