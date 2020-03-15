import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./FilterSubItems.style.scss";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const FilterSubItems = ({ title, items }) => {
  const [value, setValue] = useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={`filter-sub-items`}>
      <div className="sub-title">{title}</div>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {items.map((item, index) => (
          <FormControlLabel
            key={`subitem-${title}-${index}`}
            value={item}
            control={<GreenRadio />}
            label={item}
            className="filter-item"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterSubItems;
