// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ]

function superbowlWin(record) {
  const win = record.find(game => game.result === "W")
  return win ? win.year : win
}