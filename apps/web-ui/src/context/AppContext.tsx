import {
  createContext,
  useContext,
  useState,
} from "react";

import type {
  Conversation,
} from "../types/conversation";

interface AppContextType {

  conversations:
    Conversation[];

  setConversations:
    React.Dispatch<
      React.SetStateAction<
        Conversation[]
      >
    >;
}

const AppContext =
  createContext<
    AppContextType
  >(
    {} as AppContextType,
  );

export function AppProvider({
  children,
}: {
  children:
    React.ReactNode;
}) {

  const [
    conversations,
    setConversations,
  ] = useState<
    Conversation[]
  >([]);

  return (

    <AppContext.Provider
      value={{

        conversations,

        setConversations,

      }}
    >

      {children}

    </AppContext.Provider>

  );
}

export function useApp() {

  return useContext(
    AppContext,
  );
}