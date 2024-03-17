import { useEffect, useState } from "react";
import "./App.css";
import { WordCard } from "./components/card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WordCard searchWord={"hello"} />
      <WordCard searchWord={"hello"} />
      <WordCard searchWord={"hello"} />
      <WordCard searchWord={"hello"} />
      <WordCard searchWord={"hello"} />
    </QueryClientProvider>
  );
}

export default App;
