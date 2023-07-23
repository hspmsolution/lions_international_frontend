import { REPORTED_NEWS, TOP_NEWS,DELETE_NEWS} from "../constants/actionTypes";

const newsReducer = (state = { reportedNews: [], topNews: [] }, action) => {
  switch (action.type) {
    case REPORTED_NEWS:
      return { ...state, reportedNews: action.payload };

    case DELETE_NEWS:
      return {
        ...state,
        reportedNews: state.reportedNews.filter(
          (news) => news.newsId !== action.payload
        ),
      };
    case TOP_NEWS:
      return { ...state, topNews: action.payload };
    default:
      return state;
  }
};

export default newsReducer;
