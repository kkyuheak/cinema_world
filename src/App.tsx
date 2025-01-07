import { Route, Routes } from "react-router";
import Header from "./components/RootLayout/Header";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}
