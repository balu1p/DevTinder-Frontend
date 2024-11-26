import axios from "axios";

export const signupUser = async (signupData) => {
  try {
    console.log("Signup Data:", signupData);
    const response = await axios.post('http://localhost:3000/signup', signupData);

    // Log and return the API response
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    // Enhanced error handling with detailed error logging
    if (error.response) {
      console.error("API Error:", error.response.data);
      throw new Error(error.response.data.message || "Signup failed");
    } else {
      console.error("Network or Server Error:", error.message);
      throw new Error("An unexpected error occurred. Please try again.");
    }
  }
};
