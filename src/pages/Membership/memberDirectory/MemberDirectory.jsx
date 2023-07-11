import { useEffect, useState } from "react";
import { Box, Container, Grid, Pagination, Button } from "@mui/material";
import ProfileCard from "./ProfileCard";
import useStyles from "./Styles";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getMembers } from "../../../actions/member";

export default function MemberDirectory() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  // Define an empty array to hold the members data
  const Members = useSelector(
    (state) => state.clubMembers.memberDirectory?.data || []
  );
  const totalPages = useSelector(
    (state) => state.clubMembers.memberDirectory?.totalPages || 1
  );
  const currentPage = useSelector(
    (state) => state.clubMembers.memberDirectory?.currentPage || 1
  );
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || currentPage;

  const handleChangePage = (event, page) => {
    queryParams.set("page", page);
    navigate(`${location.pathname}?${queryParams.toString()}`);
    dispatch(getMembers(page, searchQuery));
  };

  const handleSearch = (searchQuery) => {
    dispatch(getMembers(page, searchQuery));
  };

  useEffect(() => {
    dispatch(getMembers(page, searchQuery));
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
          pb: "2rem",
        }}>
        <CustomizedBreadcrumbs
          label={"Membership"}
          subLabel={"Member Directory"}
        />
        <Container className={classes.profileContainer}>
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Member Name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={searchQuery}
          />
          <Button
          variant="contained"
            onClick={() => {
              handleSearch(searchQuery);
            }}
            aria-label="search"
            sx={{
              
              margin: "0 0.5rem",
            }}>
            Search
            {/* <SearchIcon style={{ fill: "blue" }} /> */}
          </Button>
          <Grid
            container
            spacing={2}>
            {Members?.map((member, index) => (
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                key={index}>
                <ProfileCard
                  fullName={member.fullName}
                  title={member.title}
                  clubName={member.clubName}
                  phone={member.phone}
                  image={member.profilePicture}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
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
