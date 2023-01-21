const baseURL = 'http://localhost:3000/greetings/';
const randomGreetingURL = `${baseURL}random_greeting`;

const api = {
  fetchRandomGreeeting: async () => {
    const response = await fetch(randomGreetingURL);
    const { message: greeting } = await response.json();

    return greeting;
  },
};
export default api;
