import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditProductModal = ({ open, onClose, product, onSave }) => {
  const [enableSaveBtn, setEnableSaveBtn] = useState(false);
  const [formData, setFormData] = useState({
    category: product.category || "",
    price: parseInt(product.price.replace("$", "")) || 0,
    quantity: product.quantity || 0,
    value: parseInt(product.value.replace("$", "")) || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (!enableSaveBtn) setEnableSaveBtn(true);
  };

  const handleSave = () => {
    formData.price = `$${formData.price}`;
    formData.value = `$${formData.value}`;
    onSave({ ...product, ...formData });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 400,
          backgroundColor: "#1a1a1a",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          m: "auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
        }}
      >
        {/* Modal Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Edit product
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" mb={2}>
          {product.name || "Product Name"}
        </Typography>

        {/* Input Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            variant="filled"
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#888" } }}
            InputProps={{
              style: { backgroundColor: "#2a2a2a", color: "#fff" },
            }}
          />
          <TextField
            variant="filled"
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#888" } }}
            InputProps={{
              style: { backgroundColor: "#2a2a2a", color: "#fff" },
            }}
          />
          <TextField
            variant="filled"
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#888" } }}
            InputProps={{
              style: { backgroundColor: "#2a2a2a", color: "#fff" },
            }}
          />
          <TextField
            variant="filled"
            label="Value"
            name="value"
            value={formData.value}
            onChange={handleChange}
            InputLabelProps={{ style: { color: "#888" } }}
            InputProps={{
              style: { backgroundColor: "#2a2a2a", color: "#fff" },
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
            alignItems: "center",
          }}
        >
          <Button
            variant="text"
            sx={{ color: "#d6ff00", textTransform: "none" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!enableSaveBtn}
            sx={{
              backgroundColor: !enableSaveBtn ? "#444 !important" : "",
              textTransform: "none",
              color: !enableSaveBtn ? "#888 !important" : "#d6ff00",
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProductModal;
