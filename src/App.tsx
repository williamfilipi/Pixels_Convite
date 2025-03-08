import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { Layout } from "./components/layout";

const ProductDetailPage = lazy(() => import("./routes/product-detail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <p>Carregando...</p>
        </div>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetailPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Layout>
    </Suspense>
  );
}

export default App;
