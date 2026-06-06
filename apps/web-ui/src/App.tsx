import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { LoginPage }
  from "./pages/LoginPage";

import { SignupPage }
  from "./pages/SignupPage";

import { ChatPage }
  from "./pages/ChatPage";

import { ProtectedRoute }
  from "./components/ProtectedRoute";
import {
  KnowledgePage,
} from "./pages/KnowledgePage";
import { SettingsPage } from "./pages/SettingsPage";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Navigate
              to="/chat"
            />
          }
        />

        <Route
          path="/login"
          element={
            <LoginPage />
          }
        />

        <Route
          path="/signup"
          element={
            <SignupPage />
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>

              <ChatPage />

            </ProtectedRoute>
          }
        />
<Route
  path="/knowledge"
  element={
    <ProtectedRoute>

      <KnowledgePage />

    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute>

      <SettingsPage />

    </ProtectedRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;