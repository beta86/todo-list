import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ResultsField(props) {
  return (
    <div className="w-3/4 mx-4 mt-5 mb-6 border border-purple-700 rounded p-1 flex items-center">
      <div className="flex-grow">{props.children}</div>
      <div onClick={props.onClick} className="flex-shrink-0 ml-2 pr-3">
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
