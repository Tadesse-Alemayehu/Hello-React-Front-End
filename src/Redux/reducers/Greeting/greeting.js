const RANDOM_GREET_ACTION = 'Greeting/greeting/RANDOM_GREET_ACTION';

export const generateGreeting = () => (dispatch) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');
  fetch('http://localhost:4000/greeting', {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((data) => dispatch({ type: RANDOM_GREET_ACTION, payload: data.greeting }));
};

export default function greetingReducer(
  state = 'No greeting is available',
  action,
) {
  switch (action.type) {
    case RANDOM_GREET_ACTION:
      return action.payload;
    default:
      return state;
  }
}
