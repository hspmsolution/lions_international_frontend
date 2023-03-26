import React from "react";
import { FormControl, TextField } from "@mui/material";

const Treasurer = () => {
  return (
    <div>
      {" "}
      <FormControl sx={{ m: 1, maxWidth: 130 }} style={{ margin: "1em" }}>
        <TextField
          id="outlined-number"
          //  onChange={enableButton}
          label={" Lots Size 25 "}
          type="number"
          placeholder="No of Lots"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />
      </FormControl>
    </div>
  );
};

export default Treasurer;
