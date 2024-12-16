import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


// API for registering a new user
export const registerUser = async (reqBody) => {
  return await commonApi('POST', `${serverUrl}/users`, reqBody);
};

// API for logging in a user
export const loginUser = async (reqBody) => {
  return await commonApi('POST', `${serverUrl}/login`, reqBody); // Adjust endpoint if needed
};

// API for fetching all users
export const getUsers = async () => {
  return await commonApi('GET', `${serverUrl}/users`);
};

// API for fetching details for Viewdetails
export const getViewDetails = async (id) => {
  return await commonApi('GET', `${serverUrl}/details/${id}`); // fetch details
};