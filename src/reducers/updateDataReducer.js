const initialState = {
  name: "",
  aliases: [],
  gender: "",
  birthday: "",
  occupation: "",
};

const updateDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_DATA":
      // console.log("Redux Updated Data", { ...state, ...payload });
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default updateDataReducer;
