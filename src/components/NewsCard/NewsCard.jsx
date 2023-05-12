import { Box, Card, Typography } from "@mui/material";
import useStyle from "./Styles";
import Chip from "@mui/material/Chip";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { API_URL } from "../../api";

export default function NewsCard({ item }) {
  const classes = useStyle();

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: "450px", minWidth: "250px", minheight: "320px", margin: '1rem' }}
    >
      <Box sx={{ flexBasis: 120, borderRadius: "sm", height: "200px" }}>
        <img
          src={`${API_URL + item?.image}`}
          srcSet={`${API_URL + item?.image}`}
          alt={item.newsTitle}
          className={classes.newsImage}
        />
      </Box>
      <Box sx={{ padding: "1rem" }}>
        <Chip
          icon={<CalendarTodayIcon />}
          label={item?.date?.slice(0, 10)}
          className={classes.dateChip}
        />
        <Typography variant="h6" className={classes.newsTitle}>
          {item.newsTitle}
        </Typography>
        <Typography className={classes.activityDesc}>
          {item.description}
        </Typography>
      </Box>
    </Card>
  );
}
