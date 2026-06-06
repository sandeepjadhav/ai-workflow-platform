import { Sidebar }
  from "../components/Sidebar";

import { ChatHeader }
  from "../components/ChatHeader";

export function AppLayout({
  children,
}: {
  children:
    React.ReactNode;
}) {

  return (

    <div
      className="
        h-screen
        flex
      "
    >

      <Sidebar />

      <div
        className="
          flex
          flex-1
          flex-col
        "
      >

        <ChatHeader />

        <main
          className="
            flex-1
            overflow-hidden
          "
        >

          {children}

        </main>

      </div>

    </div>

  );
}