import React from "react";
import "./CardHeader.scss";
import { Avatar, Typography } from "@mui/material";

const CardHeader = ({ name, avatar }) => {
  return (
    <div className="model-space-header">
      <Avatar className="model-space-avatar" alt={name} src={avatar} />
      <Typography variant="h6">{name}</Typography>
    </div>
  );
};

export default CardHeader;
