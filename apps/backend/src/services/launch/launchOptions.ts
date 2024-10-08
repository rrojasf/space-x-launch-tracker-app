export const getBasicOptions = () => ({
  query: {},
  options: {
    sort: {
      date_utc: "desc",
    },
    limit: 10000,
    select: {
      flight_number: 1,
      name: 1,
      date_utc: 1,
      date_precision: 1,
      upcoming: 1,
      links: 1,
      success: 1,
    },
    populate: [
      {
        path: "rocket",
        select: {
          name: 1,
        },
      },
      {
        path: "launchpad",
        select: {
          name: 1,
        },
      },
    ],
  },
});
