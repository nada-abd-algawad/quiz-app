
let leaderboard = [];

function addToLeaderboard(player) {
    leaderboard.push(player);
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 10) {
      leaderboard.pop();
    }
  }
  
  // Function to display the leaderboard
  function displayLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = "";
  
    leaderboard.forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  }
  
  // Function to save the quiz app state in local storage
  function saveQuizAppState() {
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }
  
  // Function to load the quiz app state from local storage
  function loadQuizAppState() {
    const storedLeaderboard = localStorage.getItem("leaderboard");
    if (storedLeaderboard) {
      leaderboard = JSON.parse(storedLeaderboard);
    }
  }
  
  // Initialize the quiz and leaderboard
  loadQuizAppState();

  displayLeaderboard();



