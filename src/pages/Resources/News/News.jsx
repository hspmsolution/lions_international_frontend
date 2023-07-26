import React, { useEffect, useState } from "react";
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
import LinkIcon from "@mui/icons-material/Link";
import { styled } from "@mui/material/styles";

export default function News() {
  const [activeIndex, setActiveIndex] = useState(null);
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}>
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
          }}>
          <Grid
            container
            spacing={5}
            sx={{
              display: "flex",
            }}>
            {newsData.map((item, index) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  key={index}
                  position={"relative"}>
                  <Item
                    sx={{ position: "relative" }}
                    onClick={() => {
                      if (!activeIndex) {
                        setActiveIndex(index);
                      }
                      if (activeIndex === index) {
                        setActiveIndex(null);
                      } else {
                        setActiveIndex(index);
                      }
                    }}>
                    <img
                      src={`${API_URL + item?.image}`}
                      srcSet={`${API_URL + item?.image}`}
                      alt={item.newsTitle}
                      className={classes.activityImage}
                    />
                    <h3>{item.newsTitle}</h3>
                    <p
                      className={
                        activeIndex === index
                          ? classes.descriptionExpand
                          : classes.description
                      }>
                      {item.description}
                    </p>
                    <p className={classes.activityDate}>
                      {item?.date?.slice(0, 10)}
                    </p>
                    <p className={classes.link}>
                      {item.newsPaperLink ? (
                        <a
                          href={`${item.newsPaperLink}`}
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "#000" }}>
                          <LinkIcon />
                        </a>
                      ) : (
                        ""
                      )}
                    </p>
                  </Item>

                  {/* <Paper elevation={3}>
                    <CommonCard
                      type="news"
                      images={`${API_URL + item?.image}`}
                      srcSet={`${API_URL + item?.image}`}
                      alt={item.newsTitle}
                      heading={item.newsTitle}
                      description={item.description}
                      date={item?.date?.slice(0, 10)}
                      newsPaperLink={item.newsPaperLink}
                    />
                  </Paper> */}
                </Grid>
              </>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "2rem 1rem",
          }}>
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
