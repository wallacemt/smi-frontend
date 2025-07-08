import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { Loading } from "./components/utils/Loading";
import DashBoard from "./pages/Dashboard";
import Layout from "./layout";
import AiAnalyzer from "./pages/AiAnalyzer";
import { ErorNotFound } from "./pages/Error/404";

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <DashBoard />
            </Layout>
          }
        />
        <Route
          path="/ai-analyzer"
          element={
            <Layout>
              <AiAnalyzer />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <ErorNotFound />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
}
