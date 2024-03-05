const getUsers = () => {
  setTimeout(() => {
    console.log("Array of users");
  }, 3000);
};

const getStatus = () => {
  setTimeout(() => {
    console.log("Array of statuses");
  }, 2000);
};

const getMappedUsers = async () => {
  try {
    const users = await getUsers();
    const userStatuses = await getStatus();
    const mappedUsers = users.map((user) => {
      const isActive = userStatuses.find((userStatus) => {
        userStatus.id === user.id;
      }).isActive;
      return { ...user, isActive };
    });
    console.log("MappedUsers", mappedUsers);
  } catch (error) {
    console.log("error", error);
  }
};

getMappedUsers();
