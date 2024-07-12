import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { uploadFile } from "../../redux/reducers/UploadSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUploadForm from "../organisms/FileUploadForm";

export default function UploadFile() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const dispatch = useDispatch();
  const { instance } = useMsal();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const accounts = instance.getAllAccounts();
        if (accounts.length === 0) throw new Error("No accounts found");
        const token = await instance.acquireTokenSilent({
          scopes: ["api://d274c483-5b8a-4c13-92d0-10c2584ac03a/Auth.Read"],
          account: accounts[0],
        });
        setAccessToken(token.accessToken);
      } catch (error) {
        toast.error(`Error acquiring access token: ${error.message}`);
      }
    };
    getAccessToken();
  }, [instance]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      toast.error("Please upload only Excel file");
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }
    if (!accessToken) {
      toast.error("Failed to acquire access token");
      return;
    }
    dispatch(uploadFile({ file, accessToken }));
  };

  return (
    <FileUploadForm
      handleFileChange={handleFileChange}
      handleUpload={handleUpload}
      fileName={fileName}
    />
  );
}
