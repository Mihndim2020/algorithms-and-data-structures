const location = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

const mappedArray = location
  .map((locationElem, index) => {
    return locationElem.location_key.map((locationKey) => {
      return {
        location_key: locationKey,
        config_key: bulkConfig[index].dataValues.config_key,
        autoassign: locationElem.autoassign,
      };
    });
  })
  .flat();
// const mappedArray = [];
// bulkConfig.forEach((config) => {
//   location.forEach((location) => {
//     location.location_key.map((key) => {
//       mappedArray.push({
//         config_key: config.dataValues.config_key,
//         location_key: key,
//         autoassign: location.autoassign,
//       });
//     });
//   });
// });

console.log(mappedArray);
