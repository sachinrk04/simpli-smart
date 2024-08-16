import React from "react";
import "./ErrorHandler.scss";
import { Button, Typography } from "@mui/material";

const ErrorHandler = ({ error, action, actionTitle = null }) => {
  return (
    <div className="error-handler">
      <div>
        <Typography variant="body2">{error}</Typography>
        {actionTitle && (
          <Button size="small" variant="outlined" onClick={action}>
            {actionTitle}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorHandler;
