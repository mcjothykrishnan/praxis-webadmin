import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./radioButton.css";
export default function CustomRadioButton() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';
// // import CustomTypography from '../Typography/Typography';
// import './radioButton.css';
// /**
//  *
//  * @param {*} props --required props
//  * @returns {React.ReactElement} returns the radioButton Component
//  */
// function CustomRadioButton(props) {
//   const { onChange, data, value, labelText, requiredField } = props;
//   // const [value, setValue] = React.useState('female');
//   // console.log('valu', defaultValue);
//   // const [initialValue, setInitialDefaultValue] = React.useState();
//   console.log(value, 'twygfg');

//   // React.useEffect(() => {
//   //   setInitialDefaultValue(defaultValue);
//   // }, [defaultValue]);

//   return (
//     <Grid item md={12} sm={12} xs={12} className="radioLabel">
//       <FormControl>
//         <FormLabel id="demo-controlled-radio-buttons-group">
//           {/* <CustomTypography text={labelText} requiredField={requiredField && 'required'} customClass="textDropdown" /> */}
//           {labelText}{requiredField}
//         </FormLabel>
//         <RadioGroup
//           aria-labelledby="demo-radio-buttons-group-label"
//           name="radio-buttons-group"
//           onChange={(e) => onChange(e)}
//           // value={value !== '' ? value : 'Active'}
//           className="radio_text"
//           value={value}
//           // defaultValue="Active"
//           row
//         >
//           {data?.map((item, index) => {
//             const key = index;
//             return (
//               <Grid key={key}>
//                 <FormControlLabel value={item.name} control={<Radio color="secondary" />} label={item.name} />
//               </Grid>
//             );
//           })}
//         </RadioGroup>
//       </FormControl>
//     </Grid>
//   );
// }

// export default CustomRadioButton;

// CustomRadioButton.propTypes = {
//   onChange: PropTypes.func,
//   data: PropTypes.arrayOf().isRequired,
//   labelText: PropTypes.string,
//   value: PropTypes.string,
//   // defaultValue: PropTypes.string,
//   requiredField: PropTypes.string,
// };
// CustomRadioButton.defaultProps = {
//   onChange: () => null,
//   labelText: '',
//   value: '',
//   // defaultValue: '',
//   requiredField: '',
// };
