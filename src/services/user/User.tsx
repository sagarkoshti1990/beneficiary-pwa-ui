import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
export const uploadUserDocuments = async (documents) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.post(
      `${apiBaseUrl}/users/wallet/user_docs`,
      documents,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Return response data
    return response.data;
  } catch (error) {
    console.error(
      "Error uploading documents:",
      error.response || error.message
    );
    throw error; // Rethrow error to handle it in the calling code
  }
};

/**
 * Updates user details via API call.
 * @param {string} userId - The ID of the user to update.
 * @param {Object} data - The payload containing user details.
 * @param {string} token - The authorization token.
 * @returns {Promise} - Promise representing the API response.
 */
export const updateUserDetails = async (userId, data) => {
  const token = localStorage.getItem("authToken");
  console.log("UserID", userId, data);
  try {
    const response = await axios.put(
      `${apiBaseUrl}/users/update/${userId}`,
      data,
      {
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("User updated successfully:", response.data);
    return response.data; // Return response for further handling
  } catch (error) {
    console.error(
      "Error updating user:",
      error.response?.data || error.message
    );
    throw error; // Re-throw the error for the caller to handle
  }
};
