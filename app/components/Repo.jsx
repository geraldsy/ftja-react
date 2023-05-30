import React from "react";
import Link from "next/link";
import { FaCodeBranch, FaStar, FaEye, FaCode } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,
    { next: { revalidate: 60 } }
  );
  const repo = await response.json();
  return repo;
}
const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2 className="text-xl font-semibold">{repo.name}</h2>
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
    </>
  );
};

export default Repo;
