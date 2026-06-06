import { api } from "./axios";

export async function uploadDocument(
  file: File,
) {

  const formData =
    new FormData();

  formData.append(
    "file",
    file,
  );

  const response =
    await api.post(
      "api/knowledge/documents/upload",
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      },
    );

  return response.data;
}

export async function getDocuments() {

  const response =
    await api.get(
      "api/knowledge/documents",
    );

  return response.data;
}

export async function deleteDocument(
  documentId: string,
) {

  const response =
    await api.delete(
      `api/knowledge/documents/${documentId}`,
    );

  return response.data;
}