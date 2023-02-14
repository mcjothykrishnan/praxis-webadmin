import React from "react";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
import "./button.css";
/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns the CustomButton
 */
function CustomButton(props) {
  const { btnTitle, variant, color, btnStyles, customClass, onClickHandle } =
    props;

  return (
    <Grid container md={12} lg={12} sm={12} xs={12} className="buttons_grid">
      <Button
        variant={variant}
        color={color}
        sx={btnStyles}
        onClick={onClickHandle}
        customClass={customClass}
        type="submit"
      >
        {btnTitle}
      </Button>
    </Grid>
  );
}
export default CustomButton;
CustomButton.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  customClass: PropTypes.string,
  btnStyles: PropTypes.oneOfType([PropTypes.object]),
  onClickHandle: PropTypes.func,
};
CustomButton.defaultProps = {
  variant: "contained",
  color: "",
  customClass: "",
  btnStyles: {},
  onClickHandle: () => null,
};
