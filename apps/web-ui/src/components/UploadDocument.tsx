import {
  useState,
} from "react";

interface Props {

  onUpload: (
    file: File,
  ) => Promise<void>;
}

export function UploadDocument({
  onUpload,
}: Props) {

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleChange(
    event:
      React.ChangeEvent<HTMLInputElement>,
  ) {

    const file =
      event.target.files?.[0];

    if (!file) {
      return;
    }

    try {

      setLoading(true);

      await onUpload(
        file,
      );

    } finally {

      setLoading(false);
    }
  }

  return (

    <div
      className="
        rounded-xl
        border
        bg-white
        p-6
      "
    >

      <input
        type="file"
        onChange={
          handleChange
        }
      />

      {loading && (

        <div
          className="
            mt-3
            text-blue-600
          "
        >
          Uploading...
        </div>

      )}

    </div>
  );
}