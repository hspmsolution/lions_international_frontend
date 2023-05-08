import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container, Pagination } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { topNews } from "../../../actions/news";

export default function News() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const newsData = useSelector((state) => state.news.topNews?.data || []);
  const totalPages = useSelector(
    (state) => state.news.topNews?.totalPages || 1
  );
  const currentPage = useSelector(
    (state) => state.news.topNews?.currentPage || 1
  );

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || currentPage;

  const handleChangePage = (event, newPage) => {
    queryParams.set("page", newPage);
    navigate(`${location.pathname}?${queryParams.toString()}`);
    dispatch(topNews(newPage));
  };

  useEffect(() => {
    dispatch(topNews(page));
  }, []);

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
        ></Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            py: "3rem",
            flexWrap: "wrap",
          }}
        >
          {newsData.map((item, index) => (
            <NewsCard item={item} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "2rem",
            paddingBottom: "1rem",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPage}
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
