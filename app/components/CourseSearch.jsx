"use client";
import { useState } from "react";
import React from "react";

const CourseSearch = ({ getSearchResults }) => {
  //getsearchresults is a function from HomePage since it is being called there
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`); //the query contains our search value, so now we are fetching the value from the api
    const courses = await res.json(); //and pass the result to course
    getSearchResults(courses); //the function here is from the homepage since it is passed as a prop, we passed the courses value back to homepage
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        className="p-1 px-2 rounded-md mr-2 text-black"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button
        className="text-white bg-blue-500 transition-colors p-1 px-2 rounded-md hover:bg-blue-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default CourseSearch;
