

var firebaseConfig = {
    apiKey: "AIzaSyD5uUDQcClcOAPUR_5c0wnblbYLj7LJdYk",
    authDomain: "train-time-83d22.firebaseapp.com",
    databaseURL: "https://train-time-83d22.firebaseio.com",
    projectId: "train-time-83d22",
    storageBucket: "",
    messagingSenderId: "1073805895293",
    appId: "1:1073805895293:web:bf0079c158781ec5c77314"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-train-btn").on("click", function (event) {
    event.preventDefault();

  });