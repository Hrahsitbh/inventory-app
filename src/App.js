import { useState } from "react";
import useInventoryData from "./hooks/useInventoryData";
import Navbar from "./components/NavBar";
import ProductTable from "./components/ProductTable";
import MainWidgets from "./components/MainWidgets";
import EditProductModal from "./components/EditProductModal";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [open, setOpen] = useState(false);
  const {
    inventoryData: { products = [], widgetData = {} } = {},
    selectedProduct = {},
    onDisableProduct,
    onDeleteProduct,
    onEditProductSelect,
    onUpdateProduct,
  } = useInventoryData(isAdmin);

  const onEditProductClick = (productId) => {
    onEditProductSelect(productId);
    setOpen(true);
  };

  return (
    <div className="App">
      <Navbar isAdmin={isAdmin} toggleView={(state) => setIsAdmin(state)} />
      <MainWidgets data={widgetData} />
      <ProductTable
        products={products}
        isAdmin={isAdmin}
        onDelete={onDeleteProduct}
        onDisable={onDisableProduct}
        onEdit={onEditProductClick}
      />
      {/* Modal */}
      {open && selectedProduct && (
        <EditProductModal
          open={open}
          onClose={() => setOpen(false)}
          product={selectedProduct}
          onSave={onUpdateProduct}
        />
      )}
    </div>
  );
}

export default App;
