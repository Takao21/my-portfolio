const initialState = {
  name: "",
  gender: "",
  birthday: "",
  occupation: "",
};

const updateDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_DATA":
      console.log("Updated Data", { ...state, ...payload });
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default updateDataReducer;
