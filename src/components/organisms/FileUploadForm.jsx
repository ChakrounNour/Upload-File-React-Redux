import React from "react";
import FileInput from "../molecules/FileInput";
import AtomButton from "../atoms/button/AtomButton";

function FileUploadForm({ handleFileChange, handleUpload, fileName }) {
  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-2xl rounded-lg shadow-xl bg-white w-full">
        <div className="m-4">
          <label
            htmlFor="file-upload"
            className="inline-block mb-2 text-gray-900"
          >
            File Upload
          </label>
          <FileInput onFileChange={handleFileChange} fileName={fileName} />
        </div>
        <div className="flex justify-center p-2">
          <AtomButton
            onClick={handleUpload}
            variant="primary"
            className={"z-0"}
          >
            Upload
          </AtomButton>
        </div>
      </div>
    </div>
  );
}

export default FileUploadForm;
