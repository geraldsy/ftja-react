import React from "react";
import Link from "next/link";
import { FaCodeBranch, FaStar, FaEye, FaCode } from "react-icons/fa";
async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos",
    { next: { revalidate: 60 } }
  );

  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const repos = await response.json();
  return repos;
}
const reposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-2">Repositories</h2>
      <ul className="flex flex-col gap-5">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="rounded-xl bg-gray-100 p-3 text-black hover:ring-4 hover:ring-blue-500 over:ring-offset-2 hover:ring-offset-gray-200 hover:shadow-lg transition-all"
          >
            <Link href={`/code/repos/${repo.name}`}>
              <h3 className="text-xl font-semibold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between text-gray-500 my-2">
                <span className="flex items-center gap-2">
                  <FaStar />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-2">
                  <FaCodeBranch />
                  {repo.forks_count}
                </span>
                <span className="flex items-center gap-2">
                  <FaEye />
                  {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default reposPage;
