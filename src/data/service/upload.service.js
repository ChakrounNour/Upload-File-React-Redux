import http from "../provider/http-common";

const getAll = () => {
  return http.get("/Upload");
};

const create = (file, accessToken) => {
  const formData = new FormData();
  formData.append("file", file);

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  return http.post("/FichierExcel/upload", formData, config);
};

const UploadDataService = {
  getAll,
  create,
};

export default UploadDataService;
