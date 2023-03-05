import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

type CourseGoalListProps = {
  items: {
    text: string;
    id: string;
  }[];
  onDeleteItem: (goalId: any) => void;
};

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
