import {
  useEffect,
  useState,
} from "react";

import {
  uploadDocument,
  getDocuments,
  deleteDocument,
} from "../api/knowledge.api";

import {
  UploadDocument,
} from "../components/UploadDocument";

import {
  DocumentTable,
} from "../components/DocumentTable";

import type {
  Document,
} from "../types/document";
import { Layout } from "../components/Layout";
import { AppLayout } from "../layout/AppLayout";

export function KnowledgePage() {

  const [
    documents,
    setDocuments,
  ] = useState<
    Document[]
  >([]);

  useEffect(() => {

    loadDocuments();

  }, []);

  async function loadDocuments() {

    const data =
      await getDocuments();

    setDocuments(
      data,
    );
  }

  async function handleUpload(
    file: File,
  ) {

    await uploadDocument(
      file,
    );

    await loadDocuments();
  }

  async function handleDelete(
    documentId: string,
  ) {

    await deleteDocument(
      documentId,
    );

    await loadDocuments();
  }

  return (
  <AppLayout>

      <div
        className="
          h-full
          overflow-y-auto
          p-8
        "
      >

        <h1
          className="
            mb-6
            text-3xl
            font-bold
          "
        >
          Knowledge Base
        </h1>

        <div
          className="
            mb-6
          "
        >

          <UploadDocument
            onUpload={
              handleUpload
            }
          />

        </div>

        <DocumentTable
          documents={
            documents
          }
          onDelete={
            handleDelete
          }
        />

      </div>

    </AppLayout>
  );
}