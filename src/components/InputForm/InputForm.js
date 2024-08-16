import { Grid, TextField } from "@mui/material";
import "./InputForm.scss";

export const inputForm = (input, inputs, handleInputChange, formErrors) => {
  switch (input.type) {
    case "text":
    case "number":
      return (
        <Grid item xs={12} sm={4} key={input.name}>
          <TextField
            label={input.name}
            name={input.name}
            value={inputs[input.name] || ""}
            onChange={handleInputChange}
            fullWidth
            type={input.type}
            required={input.required}
            helperText={input.description}
            size="small"
            error={formErrors[input.name]}
          />
        </Grid>
      );
    case "image":
    case "audio":
      return (
        <Grid item xs={12} sm={4} key={input.name}>
          <div
            className={`file-input-field ${
              formErrors[input.name]
                ? "file-input-field-error"
                : "file-input-field-success"
            }`}
          >
            <input
              label={input.name}
              name={input.name}
              // value={inputs[input.name] || ""}
              onChange={handleInputChange}
              type={"file"}
              required={input.required}
            />
          </div>
          <p
            className={`file-input-field-description ${
              formErrors[input.name]
                ? "file-input-field-description-error"
                : "file-input-field-description-success"
            }`}
          >
            {input.description}
          </p>
        </Grid>
      );
    default:
      return null;
  }
};
