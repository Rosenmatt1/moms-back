exports.seed = function(knex, Promise) {
  return knex('reminders').del()
    .then(function () {
      return knex('reminders').insert([
        {
          name: "Laundry",
          description: "Your laundry is getting moldy.",
          date: "future",
          time: "right now"
      },
      {
          name: "Work",
          description: "Pay your Bills. Do you really want to move back in with mom??",
          date: "future",
          time: "right now"
      },
      {
          name: "Gym",
          description: "Hmmmmm, those pants are getting kinda tight.",
          date: "future",
          time: "right now"
      },
      {
          name: "School",
          description: "Can't always count on a sugar daddy. Turn off that damned Netflix and do some homework. ",
          date: "future",
          time: "right now"
      },
      {
          name: "Groceries",
          description: "You're looking a little skinny, fridge is empty again. Make sure you buy something green this time.",
          date: "future",
          time: "right now"
      },
      {
          name: "Clean",
          description: "How are you going to get a boyfriend if you cant even clean your room?",
          date: "future",
          time: "right now"
      },
      {
          name: "Socialize",
          description: "When was the last time you saw the sun?",
          date: "future",
          time: "right now"
      },
      {
          name: "Pets",
          description: "How are you going to take care of a pet if you can't even take care of yourself?",
          date: "future",
          time: "right now"
      },
      {
          name: "Trash",
          description: "Time to take out all the trash, including that good for nothing ex.",
          date: "future",
          time: "right now"
      },
      {
          name: "That Thing",
          description: "Remember that thing you didn't want to go to but agreed to anyways? It's time.",
          date: "future",
          time: "right now"
      },
      {
          name: "Call Mom",
          description: "One of these days I'm not going to be around, then you'll miss me.",
          date: "future",
          time: "right now"
      }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('reminders_id_seq', (SELECT MAX(id) FROM reminders))"
      )
    })
};
