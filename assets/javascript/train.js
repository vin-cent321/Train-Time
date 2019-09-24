$(document).ready(function () {

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

    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var firstTrain = moment($("#first-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#min-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        time: firstTrain,
        frequency: trainFrequency
    };

    database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.time);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-input").val("");
    $("#min-input").val("");

});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;
  
    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrain);
    console.log(trainFrequency);

});

});