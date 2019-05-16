export const planetChartData = {
  labels: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai"],
  datasets: [
    {
      // one line graph
      label: "Made purchase",
      data: [7, 2, 5, 8, 9],
      backgroundColor: [
        "rgba(54,73,93,.5)",
        "rgba(54,73,93,.5)",
        "rgba(54,73,93,.5)",
        "rgba(54,73,93,.5)",
        "rgba(54,73,93,.5)"
      ],
      borderColor: ["#36495d", "#36495d", "#36495d", "#36495d", "#36495d"],
      borderWidth: 3
    },
    {
      // another line graph
      label: "Browsers",
      data: [20, 12, 16, 22, 25],
      backgroundColor: [
        "rgba(71, 183,132,.5)",
        "rgba(71, 183,132,.5)",
        "rgba(71, 183,132,.5)",
        "rgba(71, 183,132,.5)",
        "rgba(71, 183,132,.5)"
      ],
      borderColor: ["#47b784"],
      borderWidth: 3
    }
  ]
};

export default planetChartData;
