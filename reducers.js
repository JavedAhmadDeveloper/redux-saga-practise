export default function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT_ASYNC":
      console.log(" INCREMENT_ASYNC");
      return state;
    case "INCREMENT":
      console.log(" Increment Reducer run from reducer.js");
      return state + 1;
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      console.log(" decrement Reducer run from reducer.js");
      return state - 1;
    // case "INCREMENT_ASYNC":
    //   console.log("INCREEMENT ASYNC from reducer");
    default:
      return state;
  }
}
