import React from "react";
import Link from "next/link";
async function fetchRepoContents(name) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}/contents`,
    { next: { revalidate: 60 } }
  );
  const contents = await response.json();
  return contents;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");
  return (
    <>
      <h3 className=" font-semibold mt-5">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dirs.path}>
            <Link
              className="hover:text-blue-500 transition-colors"
              href={`/code/repos/${name}/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
