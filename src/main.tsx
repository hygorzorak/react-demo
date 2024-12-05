import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SessionEntry from "@/features/SessionEntry.tsx";
import UserDetails from "@/features/UserDetails";
import UserList from "@/features/UserList.tsx";

import UIProvider from "@/providers/UIProvider.tsx";
import APIProvider from "@/providers/APIProvider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider>
      <APIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SessionEntry />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/:id" element={<UserDetails />} />
          </Routes>
        </BrowserRouter>
      </APIProvider>
    </UIProvider>
  </StrictMode>
);