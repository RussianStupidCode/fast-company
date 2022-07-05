export function getUserTableData(user) {
  const maxRate = 5;

  return {
    _id: user._id,
    values: [
      {
        name: "name",
        value: user.name,
      },
      {
        name: "qualities",
        value: user.qualities,
      },
      {
        name: "profession",
        value: user.profession.name,
      },
      {
        name: "completedMeetings",
        value: user.completedMeetings,
      },
      {
        name: "rate",
        value: `${user.rate} / ${maxRate}`,
      },
    ],
  };
}
