import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { Loading } from "./components/utils/Loading";
import DashBoard from "./pages/Dashboard";
import Layout from "./layout";
import AiAnalyzer from "./pages/AiAnalyzer";
import { ErorNotFound } from "./pages/Error/404";
import InstagramAnalytics from "./pages/Instagram";
import FacebookAnalytics from "./pages/Facebook";
import TikTokAnalytics from "./pages/TikTok";
import YouTubeAnalytics from "./pages/Youtube";
import RelatorioMarketing from "./pages/Report";
import PersonaGenerator from "./pages/PeopleGenerator";

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
          path="/instagram"
          element={
            <Layout>
              <InstagramAnalytics />
            </Layout>
          }
        />
        <Route
          path="/facebook"
          element={
            <Layout>
              <FacebookAnalytics />
            </Layout>
          }
        />
        <Route
          path="/tiktok"
          element={
            <Layout>
              <TikTokAnalytics />
            </Layout>
          }
        />
        <Route
          path="/youtube"
          element={
            <Layout>
              <YouTubeAnalytics />
            </Layout>
          }
        />
        <Route
          path="/reports"
          element={
            <Layout>
              <RelatorioMarketing />
            </Layout>
          }
        />
        <Route
          path="/people"
          element={
            <Layout>
              <PersonaGenerator />
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
