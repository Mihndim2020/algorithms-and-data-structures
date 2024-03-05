const getUsers = () => {
  setTimeout(() => {
    console.log("Array of users");
  });
};

const getStatus = () => {
  setTimeout(() => {
    console.log("Array of statuses");
  });
};

getUsers().then((users) => {
  getStatus().then((userStatuses) => {
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find((userStatus) => {
        userStatus.id === user.id;
      }).isActive;
      return { ...user, isActive };
    });
    console.log("mappedUsers", mappedUsers);
  });
});

Promise.all([getUsers, getStatus]).then(([users, userStatuses]) => {
  const mappedUsers = users.map((user) => {
    const isActive = userStatuses.find((userStatus) => {
      userStatus.id === user.id;
    }).isActive;
    return { ...user, isActive };
  });
  console.log("MappedUsers", mappedUsers);
});
