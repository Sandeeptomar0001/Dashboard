// Courses.js
import React from 'react';

const Courses = () => {
  const fullStackCourses = [
    { id: 1, name: 'HTML/CSS', category: 'Front-end' },
    { id: 2, name: 'JavaScript', category: 'Front-end' },
    { id: 3, name: 'React.js', category: 'Front-end' },
    { id: 4, name: 'Node.js', category: 'Back-end' },
    { id: 5, name: 'Express.js', category: 'Back-end' },
    { id: 6, name: 'MongoDB', category: 'Back-end' },
  ];

  return (
    <div>
      <h2>Full Stack Development Courses</h2>
      <ul>
        {fullStackCourses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
