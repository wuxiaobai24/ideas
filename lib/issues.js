import config from "../config";

async function getIssues() {
  const url = `https://api.github.com/repos/${config.repo.owner}/${config.repo.repo_name}/issues`;
  return await fetch(url).then((res) => res.json());
}

export { getIssues };
