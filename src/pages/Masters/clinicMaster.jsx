import React, { useState } from "react";
import CustomRadioButton from "../../components/radioButton/radioButton";
import CustomButton from "../../components/button/button";
import CustomSelect from "../../components/select/select";
import CustomCheckbox from "../../components/checkbox/checkbox";
import CustomDatePicker from "../../components/datePicker/datePicker";
import CustomDialog from "../../components/dialog/dialog";

function ClinicMaster() {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("");
  const handleChangeSelect = (event) => {
    setSelect(event.target.value);
  };
  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleChangeRadio = (event) => {
    setRadio(event.target.value);
  };
  const options = [
    { label: "Male", value: "m" },
    { label: "Female", value: "f" },
    { label: "Other", value: "o" },
  ];
  const actions = (
    <>
      "button"
    </>
  );

  return (
    <>
      <CustomButton
        btnTitle="submit"
        variant="contained"
        color="primary"
        btnStyles={{
          color: "#fff",
          background: "#4A0239",
          marginTop: "50px",
        }}
        // onClickHandle={handleClose()}
      />
      <CustomButton
        btnTitle="cancel"
        variant="outlined"
        color="error"
        btnStyles={{
          color: "#FF748B",
          marginTop: "50px",
          border: "1px solid #FB718A",
        }}
        // onClickHandle={() => handleClose()}
      />

      <CustomCheckbox
        name="agreement"
        label="Agree to terms and conditions"
        checked={checked}
        onChange={handleChangeCheckbox}
      />

      <CustomRadioButton
        name="custom-radio-button"
        value={radio}
        label="Gender"
        options={options}
        onChange={handleChangeRadio}
      />

    

      <CustomSelect
        label="Status"
        options={[
          { label: "Active", value: "a" },
          { label: "Inactive", value: "i" },
          { label: "Leave", value: "L" },
        ]}
        value={select}
        onChange={handleChangeSelect}
      />

      <CustomDatePicker />
      <button onClick={handleOpen}>Modal or Dialog</button>
      <CustomDialog
        isOpen={isOpen}
        onClose={handleClose}
        title="Custom Dialog"
        content={
          <>
           Content
          </>
        }
        actions={actions}
      />
    </>
  );
}

export default ClinicMaster;
