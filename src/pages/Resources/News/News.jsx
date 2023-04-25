import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Pagination,
} from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ActivityCard from "../../../components/ActivityCard/ActivityCard";

const data = [
  {
    src: "",
    title: "Hunger Relief Program",
    description:
      "As part of the District’s Hunger Relief Program, LCB Shikshana Food",
  }
];

export default function News() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <CustomizedBreadcrumbs label={"Resources"} subLabel={"News"} />
      <Box
        sx={{
          pt: "1rem",
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <Container
          sx={{
            my: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ width: "30%", minWidth: "10rem" }}
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <Box sx={{ display: "inline-flex", gap: "2rem" }}>
            <Button variant="contained">Search</Button>
            <Button variant="contained">Reset</Button>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            py: "3rem",
            flexWrap: "wrap",
          }}
        >
          {currentData.map((item, index) => (
            <ActivityCard item={item} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "2rem",
          }}
        >
          <Pagination
            count={Math.ceil(filteredData.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            variant="outlined"
            color="primary"
          />
          </Box>
          </Box>
          </>
  )};