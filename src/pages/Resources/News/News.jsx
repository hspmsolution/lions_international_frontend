import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Pagination } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { topNews } from "../../../actions/news";
import useStyles from "./Styles";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import CommonCard from "../../../components/CommonCard/CommonCard";
import { API_URL } from "../../../api";

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
  }, [dispatch, page]);

  

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <CustomizedBreadcrumbs
          label={"Resources"}
          subLabel={"News"}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Grid
            container
            spacing={5}
            sx={{
              display: "flex",
            }}
          >
            {newsData.map((item, index) => (
              <>
                {/* <NewsCard
                item={item}
                key={index}
              /> */}
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  key={index}
                >
                  <Paper elevation={3}>
                    <CommonCard
                      type='news'
                      images={`${API_URL + item?.image}`}
                      srcSet={`${API_URL + item?.image}`}
                      alt={item.newsTitle}
                      heading={item.newsTitle}
                      description={item.description}
                      date={item?.date?.slice(0, 10)}
                      newsPaperLink={item.newsPaperLink}
                    />
                  </Paper>
                </Grid>
              </>
            ))}
          </Grid>
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
