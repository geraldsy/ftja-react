import { NextResponse } from "next/server";
import courses from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url); //get the value of the url
  const query = searchParams.get("query"); //get the value "react" from URL:localhost:3000/api/courses/search?query=react
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase()); //filter the courses based on the query, both to lowercase
  });
  return NextResponse.json(filteredCourses); //return the filtered courses
}
