import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import { Layout } from "./components/layout";

const ProductDetailPage = lazy(() => import("./routes/product-detail"));
const CartConfirmationPage = lazy(() => import("./routes/cart-confirmation"));
const CartPage = lazy(() => import("./routes/cart"));

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
          <Route
            path="/carrinho/confirmacao"
            element={<CartConfirmationPage />}
          />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Layout>
    </Suspense>
  );
}

export default App;
