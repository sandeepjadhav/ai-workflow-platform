import { Sidebar } from "./Sidebar";
import { ChatHeader } from "./ChatHeader";

interface Props {
  children: React.ReactNode;
}

export function Layout({
  children,
}: Props) {

  return (

    <div className="h-screen flex bg-slate-100">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <ChatHeader />

        <main className="flex-1 overflow-hidden">

          {children}

        </main>

      </div>

    </div>
  );
}