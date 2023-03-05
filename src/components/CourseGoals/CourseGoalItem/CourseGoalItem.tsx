import React from "react";
import "./CourseGoalItem.css";

type CourseGoalItemProps = {
  key: string;
  id: string;
  onDelete: (goalId: any) => void;
  children: React.ReactNode;
};

const CourseGoalItem = (props: CourseGoalItemProps) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
