import React, { useEffect, useState, useMemo } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { topNews } from "../../../actions/news";

export default function News() {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topNews());
  }, [dispatch]);

  const newsData = useSelector((state) => state.news.topNews?.data || []);

//   const filteredData = newsData.filter((item) =>
//   item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
// );


  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const currentData = useMemo(() => {
    return newsData.slice(startIndex, endIndex);
  }, [newsData, startIndex, endIndex]);
console.log(currentData);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };

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
          {/* <Box sx={{ display: "inline-flex", gap: "2rem" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="contained" onClick={() => setSearchTerm("")}>
              Reset
            </Button>
          </Box> */}
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            py: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* {filteredData.length > 0 ? (
            currentData.map((item, index) => (
              <ActivityCard item={item} key={index} />
            ))
          ) : (
            <Typography variant="h6">No matching results found.</Typography>
          )} */}
          {
            currentData.map((item,index)=>(
              <ActivityCard item ={item} key={index}/>
            ))
          }
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "2rem",
          }}
        >
          <Pagination
            count={Math.ceil(newsData.length / rowsPerPage)}
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
  );
}
