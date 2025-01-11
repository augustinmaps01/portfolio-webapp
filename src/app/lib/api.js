import axios from 'axios';

export const sendContactForm = async (data) => {
  return axios.post('/api/send', data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
