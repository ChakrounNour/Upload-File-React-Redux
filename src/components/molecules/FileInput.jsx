import React from "react";
import PropTypes from "prop-types";
import AtomInput from "../atoms/input/AtomInput";

function FileInput({ onFileChange, fileName }) {
  return (
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col w-full h-32 border-4 border-blue-500 border-dashed hover:bg-gray-100 hover:border-blue-700">
        <div className="flex flex-col items-center justify-center pt-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-700 group-hover:text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="pt-1 text-sm text-blue-700 group-hover:text-blue-900">
            {fileName || "Attach a file"}
          </p>
        </div>
        <AtomInput
          type="file"
          accept=".xlsx"
          onChange={onFileChange}
          className="opacity-0"
        />
      </label>
    </div>
  );
}

export default FileInput;
FileInput.propTypes = {
  onFileChange: PropTypes.func.isRequired,
  fileName: PropTypes.string,
};
