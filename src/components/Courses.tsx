import React from "react";

interface Props {
  name: string;
  period?: number;
}

function Course({ name }: Props) {
  return (
    <ul>
      <li>{name}</li>
    </ul>
  )
}

export default Course;