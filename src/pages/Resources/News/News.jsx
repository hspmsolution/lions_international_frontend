import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Container, Pagination } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import NewsCard from "../../../components/NewsCard/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { topNews } from "../../../actions/news";
import useStyles from './Styles';

export default function News() {
  const classes = useStyles();
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
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <CustomizedBreadcrumbs label={"Resources"} subLabel={"News"} />
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }} >
          {newsData.map((item, index) => (
            <NewsCard item={item} key={index} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "2rem",
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
            className={classes.newsPagination}
          />
        </Box>
      </Box>
    </>
  );
}
