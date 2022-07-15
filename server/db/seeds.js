use lingozilla;
db.dropDatabase();

db.feedback.insertMany([
  {
    name: "Oliver",
    age: "6",
    rating: "5",
    comment: "krowa krooowaaa",
    date: "2022-05-29"
  },
  {
    name: "Lisa",
    age: "8",
    rating: "3",
    comment: "Cute animals, but Polish is hard",
    date: "2022-06-14"
  },
]);