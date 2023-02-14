import React, { useState } from "react";
import RadioButton from "../../components/radioButton/radioButton";
import Button from "../../components/button/button";
import Select from "../../components/select/select";
import Checkbox from "../../components/checkbox/checkbox";
import DatePicker from "../../components/datePicker/datePicker";

function ClinicMaster() {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Button
        btnTitle="submit"
        variant="contained"
        color="primary"
        btnStyles={{
          color: "#fff",
          background: "#4A0239",
          marginTop: "50px",
        }}
        // onClickHandle={handleSubmit(onSubmit)}
      />
      <Button
        btnTitle="cancel"
        variant="outlined"
        color="error"
        btnStyles={{
          color: "#FF748B",
          marginTop: "50px",
          border: "1px solid #FB718A",
        }}
        // onClickHandle={() => handleCancel()}
      />
      <Button
        btnTitle="Approve"
        variant="contained"
        color="success"
        btnStyles={{
          color: "#fff",
          marginTop: "50px",
          border: "1px solid success",
        }}
        // onClickHandle={() => handleCancel()}
      />
      <Button
        btnTitle="Reject"
        variant="contained"
        color="warning"
        btnStyles={{
          color: "#fff",
          marginTop: "50px",
          border: "1px solid success",
        }}
        // onClickHandle={() => handleCancel()}
      />

      <Checkbox
        name="agreement"
        label="Agree to terms and conditions"
        checked={checked}
        onChange={handleChange}
      />

      <Select />
      <RadioButton />
      <DatePicker />
    </>
  );
}

export default ClinicMaster;
