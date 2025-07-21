import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Loading } from "./components/utils/Loading";
import Layout from "./layout";
import { ErorNotFound } from "./pages/Error/404";
import { useUserContext } from "./contexts/UserContext";
import { Login } from "./pages/Auth/Login";

const DashBoard = lazy(() => import("./pages/Dashboard"));
const AiAnalyzer = lazy(() => import("./pages/AiAnalyzer"));
const InstagramAnalytics = lazy(() => import("./pages/Instagram"));
const FacebookAnalytics = lazy(() => import("./pages/Facebook"));
const TikTokAnalytics = lazy(() => import("./pages/TikTok"));
const YouTubeAnalytics = lazy(() => import("./pages/Youtube"));
const RelatorioMarketing = lazy(() => import("./pages/Report"));
const Persona = lazy(() => import("./pages/Personas"));
const PostHistory = lazy(() => import("./pages/PostHistory"));
const PostGenerate = lazy(() => import("./pages/PostGenerate"));
const ShedulePost = lazy(() => import("./pages/ShedulePost"));

const PrivateRoutes = ({ children }: any) => {
  const { user } = useUserContext();
  if (!user) return <Navigate to="/" />;
  return children;
};

export default function AppRouter() {
  const { user, loading } = useUserContext();
  const privateRoutes = [
    { path: "/ai-analyzer", element: <AiAnalyzer /> },
    { path: "/instagram", element: <InstagramAnalytics /> },
    { path: "/facebook", element: <FacebookAnalytics /> },
    { path: "/tiktok", element: <TikTokAnalytics /> },
    { path: "/youtube", element: <YouTubeAnalytics /> },
    { path: "/reports", element: <RelatorioMarketing /> },
    { path: "/personas", element: <Persona /> },
    { path: "/post/history", element: <PostHistory /> },
    { path: "/post/history/persona/:id", element: <PostHistory /> },
    { path: "/post/generate", element: <PostGenerate /> },
    { path: "/post/scheduled", element: <ShedulePost /> },
  ];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-900" />
        <p className="text-white font-principal">Carregando...</p>
      </div>
    );
  }
  
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Layout>
                <DashBoard />
              </Layout>
            ) : (
              <Login />
            )
          }
        />
        <Route path="/sign-in" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <ErorNotFound />
            </Layout>
          }
        />
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <PrivateRoutes>
                <Layout>{route.element}</Layout>
              </PrivateRoutes>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

