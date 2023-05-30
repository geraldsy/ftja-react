import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; //import to have a unique id
import courses from "./data.json"; //import data.json

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();
  //const {} destructures the values from request.json
  //request.json gets the body data from the client or postman,

  const newCourse = {
    //create new course object to store the values above
    id: uuidv4(), //random id
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse); //push the new course in the courses

  return NextResponse.json(courses); //it will just be pushed in memory
}
