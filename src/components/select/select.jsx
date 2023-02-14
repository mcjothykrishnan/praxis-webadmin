import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./select.css";

export default function CustomSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Status</InputLabel>
        <Select 
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
// import React from 'react';
// import PropTypes from 'prop-types';
// import { FormControl, Select, MenuItem, Box, InputLabel } from '@mui/material';
// import './dropdown.css';
// // import CustomTypography from '../Typography/Typography';
// /**
//  *
//  * @param {object} props - props required in normal dropdown
//  * @returns {React.ReactElement} - returns the normal dropdown
//  */
// function CustomDropdown(props) {
//   const {
//     data,
//     handleChange,
//     // dropDownChange,
//     labelText,
//     value,
//     disabled,
//     name,
//     label,
//     customClass,
//     placeholder,
//     requiredField,
//   } = props;

//   return (
//     <Box className="box" item md={12} sm={12}>
//       <Box>
//         {/* <CustomTypography
//           type="caption"
//           text={labelText}
//           placeholder={placeholder}
//           customClass="textDropdown"
//           // colorType="senary"
//           requiredField={requiredField}
//         /> */}{labelText}{placeholder}{requiredField}
//       </Box>
//       <FormControl className="formControl" fullWidth disabled={disabled} size="small">
//         <InputLabel id="demo-simple-select-label" color="primary" className="input">
//           {placeholder}
//         </InputLabel>

//         <Select
//           size="small"
//           name={name}
//           fullWidth
//           // labelId="demo-simple-select-label"
//           // id="demo-simple-select"
//           labelId="demo-select-small"
//           id="demo-select-small"
//           value={value}
//           label={label}
//           data={data}
//           className={`${customClass} ${disabled && 'disable'} customDropdown`}
//           onChange={(e) => handleChange(e)}
//           // dropDownChange={(e) => dropDownChange(e)}
//           displayEmpty
//           inputProps={{ 'aria-label': 'Without label' }}
//         >
//           {data?.length &&
//             data?.map((item) => (
//               <MenuItem value={item?.value} key={item?.id}>
//                 {item?.value}
//               </MenuItem>
//             ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }
// export default CustomDropdown;

// CustomDropdown.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
//   handleChange: PropTypes.func.isRequired,
//   // dropDownChange: PropTypes.func.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   disabled: PropTypes.bool,
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   customClass: PropTypes.string,
//   requiredField: PropTypes.bool,
//   placeholder: PropTypes.string,
//   labelText: PropTypes.string,
// };
// CustomDropdown.defaultProps = {
//   disabled: false,
//   label: '',
//   customClass: '',
//   requiredField: false,
//   placeholder: '',
//   labelText: '',
// };
