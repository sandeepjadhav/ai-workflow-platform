import type {
  Document,
} from "../types/document";

interface Props {

  documents:
    Document[];

  onDelete: (
    id: string,
  ) => void;
}

export function DocumentTable({
  documents,
  onDelete,
}: Props) {

  return (

    <div
      className="
        rounded-xl
        border
        bg-white
      "
    >

      <table
        className="
          w-full
        "
      >

        <thead>

          <tr
            className="
              border-b
            "
          >

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4 text-left">
              Created
            </th>

            <th className="p-4 text-left">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {documents.map(
            document => (

              <tr
                key={
                  document.id
                }
                className="
                  border-b
                "
              >

                <td className="p-4">
                  {document.name}
                </td>

                <td className="p-4">

                  <span
                    className="
                      rounded-full
                      bg-green-100
                      px-3
                      py-1
                      text-sm
                    "
                  >
                    {
                      document.status
                    }
                  </span>

                </td>

                <td className="p-4">

                  {
                    new Date(
                      document.createdAt,
                    ).toLocaleString()
                  }

                </td>

                <td className="p-4">

                  <button
                    onClick={() =>
                      onDelete(
                        document.id,
                      )
                    }
                    className="
                      rounded
                      bg-red-500
                      px-3
                      py-1
                      text-white
                    "
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ),
          )}

        </tbody>

      </table>

    </div>
  );
}