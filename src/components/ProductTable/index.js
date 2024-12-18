import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ProductTable = ({ products, isAdmin, onEdit, onDelete, onDisable }) => {
  if (!products?.length) return null;
  return (
    <Box
      sx={{
        padding: "25px 40px",
        display: "flex",

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table stickyHeader sx={{ backgroundColor: "#1a1a1a" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Name"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Category"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Price"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Quantity"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Value"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
              <TableCell
                sx={{
                  color: "#00980c6b",
                  backgroundColor: "#1a1a1a",
                  borderRadius: 4,
                }}
              >
                <Chip
                  label="Actions"
                  sx={{ color: "#eaf21a6b", background: "black" }}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell
                  sx={{
                    color: product.disabled ? "#d3d3d3b3" : "#fff",
                  }}
                >
                  {product.name}
                </TableCell>
                <TableCell
                  sx={{
                    color: product.disabled ? "#d3d3d3b3" : "#fff",
                  }}
                >
                  {product.category}
                </TableCell>
                <TableCell
                  sx={{
                    color: product.disabled ? "#d3d3d3b3" : "#fff",
                  }}
                >
                  {product.price}
                </TableCell>
                <TableCell
                  sx={{
                    color: product.disabled ? "#d3d3d3b3" : "#fff",
                  }}
                >
                  {product.quantity}
                </TableCell>
                <TableCell
                  sx={{
                    color: product.disabled ? "#d3d3d3b3" : "#fff",
                  }}
                >
                  {product.value}
                </TableCell>

                <TableCell>
                  <IconButton
                    onClick={() =>
                      product.disabled || !isAdmin
                        ? () => {}
                        : onEdit(product.id)
                    }
                    sx={{
                      color:
                        product.disabled || !isAdmin
                          ? "#d3d3d3b3"
                          : "dodgerblue",
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      product.disabled || !isAdmin
                        ? () => {}
                        : onDelete(product.id)
                    }
                    sx={{
                      color: product.disabled || !isAdmin ? "#d3d3d3b3" : "red",
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      !isAdmin ? () => {} : onDisable(product.id)
                    }
                    sx={{
                      color:
                        product.disabled || !isAdmin ? "#d3d3d3b3" : "orange",
                    }}
                  >
                    <VisibilityOffIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
