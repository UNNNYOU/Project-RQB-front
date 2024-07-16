export const useAuth = () => {
  const setAccessToken = (token) => {
    localStorage.setItem("access_token", token);
  };

  const getAccessToken = () => {
    return localStorage.getItem("access_token");
  };

  return { setAccessToken, getAccessToken };
};
