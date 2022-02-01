var gitUserRepos = function () {
  fetch("https://api.github.com/users/octocat/repos");
};
gitUserRepos();
