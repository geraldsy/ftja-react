import React from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
const RepoPage = ({ params: { name } }) => {
  return (
    <div className="rounded-xl bg-gray-100 p-3 text-black w-full ">
      <Link
        href="/code/repos"
        className=" inline-block  px-2  text-sm   mb-2 hover:text-white text-white bg-blue-500 transition-colors p-1 rounded-md hover:bg-blue-400"
      >
        <div className="flex gap-2 items-center">
          <FaArrowLeft />
          Back to Repositories
        </div>
      </Link>
      <Suspense
        fallback={
          <div className="flex justify-center  h-screen items-center ">
            <FaSpinner className="text-4xl text-primary-500 animate-spin" />
          </div>
        }
      >
        <Repo name={name} />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center  h-screen items-center ">
            <FaSpinner className="text-4xl text-primary-500 animate-spin" />
          </div>
        }
      >
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
