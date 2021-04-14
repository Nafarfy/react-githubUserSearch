import axios from "axios";

const mapUserData = ({ avatar_url, html_url, ...userDaata }) => ({
  ...userDaata,
  avatarUrl: avatar_url,
  htmlUrl: html_url,
});

export const fetchUser = (inputValue) => {
  return axios
    .get(`https://api.github.com/users/${inputValue}`)
    .then((response) => mapUserData(response.data));
};
