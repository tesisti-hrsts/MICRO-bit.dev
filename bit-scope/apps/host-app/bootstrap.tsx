import React from "react";
import ReactDOM from "react-dom/client";
import { HostApp } from "./host-app";

const root = document!.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(<HostApp />);