import React from "react";
import Link from "next/link";

const Courses = ({ courses }) => {
  return (
    <div className="flex flex-col gap-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className="rounded-xl bg-gray-100 p-3 text-black w-full  "
        >
          <h2 className="text-xl font-semibold">{course.title}</h2>
          <p>Level: {course.level}</p>
          <p>{course.descripton}</p>
          <Link
            href={course.link}
            target="_blank"
            className="text-white text-xs bg-blue-500 transition-colors p-1 px-2 rounded-md hover:bg-blue-400"
          >
            Go to Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
