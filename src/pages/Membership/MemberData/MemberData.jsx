import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import useStyles from "./Styles";
import { allClubs, titles, downloadMemberData } from "../../../actions/client";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import {
  SELECT_ALL_CLUBS,
  SELECT_CLUBS,
  SELECT_TITLES,
  SELECT_ALL_TITLES,
} from "../../../constants/actionTypes";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MemberData() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const clubs = useSelector((state) => state.client.allClubs);
  const alltitles = useSelector((state) => state.client.titles);
  const [selectAllClubs, setSelectAllClubs] = useState(false);
  const [selectAllTitles, setSelectAllTitles] = useState(false);

  const selectClubs = () => {
    const updatedSelectAllClubs = !selectAllClubs;
    setSelectAllClubs(updatedSelectAllClubs);
    dispatch({ type: SELECT_ALL_CLUBS, payload: updatedSelectAllClubs });
  };

  const selectTitles = () => {
    const updatedSelectAllTitles = !selectAllTitles;
    setSelectAllTitles(updatedSelectAllTitles);
    dispatch({ type: SELECT_ALL_TITLES, payload: updatedSelectAllTitles });
  };

  const downloadData = () => {
    const selectedClubs = clubs.filter((club) => club.isChecked);
    const selectedTitles = alltitles.filter((title) => title.isChecked);
    dispatch(downloadMemberData(selectedClubs, selectedTitles));
  };

  useEffect(() => {
    dispatch(allClubs());
    dispatch(titles());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <CustomizedBreadcrumbs
          label={"Membership"}
          subLabel={"Download Member Data"}
        />
        <Container sx={{ paddingX: { sm: '5rem' } }}>
          <Box sx={{ width: "100%", pb: "4rem", textAlign: 'center' }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} md={6}>
                <Item className={classes.checkItems}>
                  <Typography variant="h6">Select Clubs</Typography>
                  <Box
                    sx={{
                      border: "1px solid #c9c9c9",
                      margin: "1rem",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      height: '500px',
                      overflowY: 'scroll',
                    }}
                  >
                    <FormGroup>
                      {clubs.map((club, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              checked={club.isChecked}
                              onChange={() => {
                                dispatch({
                                  type: SELECT_CLUBS,
                                  payload: club.clubName,
                                });
                              }}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={club.clubName}
                        />
                      ))}
                    </FormGroup>
                  </Box>
                  <Box sx={{ display: "inline-flex", gap: "2rem" }}>
                    <Button variant="contained" onClick={selectClubs}>
                      {selectAllClubs ? "Deselect All" : "Select All"}
                    </Button>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item className={classes.checkItems}>
                  <Typography variant="h6">Select Positions</Typography>
                  <Box
                    sx={{
                      border: "1px solid #c9c9c9",
                      margin: "1rem",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      height: '500px',
                      overflowY: 'scroll',
                    }}
                  >
                    <FormGroup>
                      {alltitles.map((item, i) => (
                        <FormControlLabel
                          key={i}
                          control={
                            <Checkbox
                              checked={item.isChecked}
                              onChange={() => {
                                dispatch({
                                  type: SELECT_TITLES,
                                  payload: item.title,
                                });
                              }}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={item.title}
                        />
                      ))}
                    </FormGroup>
                  </Box>
                  <Box sx={{ display: "inline-flex", gap: "2rem" }}>
                    <Button variant="contained" onClick={selectTitles}>
                      {selectAllTitles ? "Deselect All" : "Select All"}
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            <Button
              sx={{ marginRight: "auto", mt: '2rem' }}
              variant="contained"
              onClick={downloadData}
            >
              Download
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
