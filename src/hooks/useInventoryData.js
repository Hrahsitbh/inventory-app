import { useEffect, useState } from "react";
import fetchList from "../api/fetchList";

const transformData = (data) => {
  let totalProducts = 0;
  let totalValue = 0;
  let outOfStock = 0;
  const categories = new Set();
  const modData = data.map((item, id) => {
    if (item.disabled) outOfStock++;
    else {
      totalValue += parseInt(item.value.replace("$", ""));
      categories.add(item.category);
      totalProducts++;
    }

    return {
      id: id + 1,
      name: item.name,
      category: item.category,
      value: item.value,
      quantity: item.quantity,
      price: item.price,
      disabled: item.disabled || false,
    };
  });
  const res = {
    widgetData: {
      totalProducts,
      totalValue,
      outOfStock,
      categories: categories.size,
    },
    products: modData,
  };
  return res;
};

function useInventoryData() {
  const [inventoryData, setInventoryData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchList();
      const transformedData = transformData(data);
      setInventoryData(transformedData);
    };
    fetchData();
  }, []);

  const onEditProductSelect = (productId) => {
    setSelectedProduct(inventoryData.products.find((p) => p.id === productId));
  };

  const onUpdateProduct = (product) => {
    const products = inventoryData.products.map((p) =>
      p.id === product.id ? product : p
    );
    setInventoryData(transformData(products));
  };

  const onDeleteProduct = (productId) => {
    const products = inventoryData.products.filter((p) => p.id !== productId);
    setInventoryData(transformData(products));
  };

  const onDisableProduct = (productId) => {
    const products = inventoryData.products.map((p) =>
      p.id === productId ? { ...p, disabled: !p.disabled } : p
    );
    setInventoryData(transformData(products));
  };

  return {
    inventoryData,
    selectedProduct,
    onDisableProduct,
    onDeleteProduct,
    onEditProductSelect,
    onUpdateProduct,
  };
}

export default useInventoryData;
