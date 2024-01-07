function superbowlWin(array) {
    const winningGame = array.find(game => game.result === "W");
  
    if (winningGame) {
      return winningGame.year;
    } else {
      return undefined;
    }
  }
  
  // Example usage:
  const games = [
    { year: 2020, result: "L" },
    { year: 2021, result: "W" },
    { year: 2022, result: "L" },
  ];
  
  console.log(superbowlWin(games)); // Output: 2021
  
