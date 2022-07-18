use lingozilla;
db.dropDatabase();

db.feedback.insertMany([
  {
    name: "Oliver",
    ageGroup: "5 - 14 years old",
    rating: "5",
    comment: "krowa krooowaaa",
    date: "2022-05-29"
  },
  {
    name: "Lisa",
    ageGroup: "5 - 14 years old",
    rating: "3",
    comment: "Cute animals, but Polish is hard",
    date: "2022-06-14"
  },
]);