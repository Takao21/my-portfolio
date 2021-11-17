export const updateData = (data) => {
  console.log("Redux updateData action called.");
  return {
    type: "UPDATE_DATA",
    payload: data || {},
  };
};
