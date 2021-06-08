export const updateData = (data) => {
  console.log("updateData action called.");
  return {
    type: "UPDATE_DATA",
    payload: data || {},
  };
};
