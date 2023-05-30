"use client"; //declare this for it to become a client rendered component/page
import { useState, useEffect } from "react"; //declare to use these
import React from "react";
import LoadingPage from "./loading"; //import loading page manually
import Link from "next/link";
import Courses from "./components/Courses"; //import Courses Component
import CourseSearch from "./components/CourseSearch";

const HomePage = () => {
  const [courses, setCourses] = useState([]); //we are using use states because we will have search, so the data will always be changing. Either displaying all the courses or searching for a specific course
  const [loading, setLoading] = useState(true); //the loading is only working automatically for server components (where as this is now a client component), we use the loading page manually here, set the loading page while the data is being fetched and not yet loaded

  //getSearchResults is passed as a prop to CoursesSearch, the value being passed in this function will be the value of Course
  const getSearchResults = (results) => {
    setCourses(results);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses"); //fetch data
      const data = await res.json(); //put the converted json data to a variable
      setCourses(data); //add the fetched data in courses
      setLoading(false); //remove the loading component once data has loaded
    };
    fetchCourses();
  }, []); // the [] means that it will only be done once

  if (loading) {
    //display loading page initially if the data hasn't loaded
    return <LoadingPage />;
  }

  //in <Courses/> pass the courses params inside Courses Component since it containts the list of courses fetched in home page

  //in <CourseSearch/> we passed the getSearchResult function as a props in Course Search so that it can be used in CourseSearch component. Once used, the value being passed is placed in results.
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-2">Home Page</h2>
      <CourseSearch getSearchResults={getSearchResults} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
