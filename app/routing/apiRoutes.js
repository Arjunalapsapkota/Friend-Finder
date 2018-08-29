
let friends = require("../data/friends.js");
console.log(friends);
let totalDifference = -1;

let findMatch = (survey) => {

    let match;

    friends.forEach(function (friend) {
        let difference = 0;
        for (let i = 0; i < friend.scores.length; i++) {
            difference += Math.abs(survey.scores[i] - friend.scores[i]);
        }

        if (totalDifference == -1 || totalDifference >= difference) {
            totalDifference = difference;
            match = friend;
        }
    });

    return match;
}

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        let survey = req.body;
        res.json(findMatch(survey));
        friends.push(survey);
        console.log(friends);
    });
}