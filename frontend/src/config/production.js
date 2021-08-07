const firebaseConfig = {
  apiKey: "AIzaSyBPrGPgeevhC0Y-K_3Y4D5CuTcexuNBuek",
  authDomain: "pethotel-5da09.firebaseapp.com",
  projectId: "pethotel-5da09",
  storageBucket: "pethotel-5da09.appspot.com",
  messagingSenderId: "744951309461",
  appId: "1:744951309461:web:fda0e90ef6fe50d3dea79c",
  measurementId: "G-XGPMZW1XKT"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
