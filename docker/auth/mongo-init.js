db.createUser({
  user: "writer",
  pwd: "123",
  roles: [
    {
      role: "readWrite",
      db: "cozyter",
    },
  ],
});

db.createUser({
  user: "reader",
  pwd: "123",
  roles: [
    {
      role: "read",
      db: "cozyter",
    },
  ],
});
