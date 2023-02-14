export const AstroReviewsEntries = [
  {
    isRadioAction: true,
    name: "Status",
    label: "Status",
    breakpoint: 4,
    radioButtonData: [{ name: "Active" }, { name: "Inactive" }],
    defaultValue: "Active",
    validation: { required: true },
    requiredField: true,
    error_message: "Status",
  },

  {
    isSubmitButton: true,
    name: "submit_button",
    buttonTitle: "Submit",
    breakpoint: 1,
    customClass: "sourceButton",
  },
  {
    isCancelButton: true,
    name: "submit_button",
    buttonTitle: "Cancel",
    breakpoint: 1,
    customClass: "sourceButton",
  },
  {
    isDropdown: true,
    name: "status",
    breakpoint: 3,
    label: "Status",
    // placeholder: 'Ads Place',
    disabled: false,
    DropdownData: [
      {
        id: 1,
        value: "Proceed",
      },
      {
        id: 2,
        value: "Rejected",
      },
      {
        id: 3,
        value: "Hold",
      },
    ],
    validation: { required: true },
  },
];

export const ConsultFormDefaultValues = {
  firstText: "",
  SecondText: "",
  Status: "",
  ThirdText: "",
  // submit_button: '',
  // cancel_button: '',
};
