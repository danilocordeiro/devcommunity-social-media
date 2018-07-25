import axios from 'axios';

const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.commom['Authorization'] = token;
  } else {
    delete axios.defaults.headers.commom['Authorization'];
  }
};

export default setAuthToken;