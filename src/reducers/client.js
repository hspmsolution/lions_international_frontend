import {
  ACTIVITY_STATS,
  EVENTS,
  TOPCLUBS,
  SLIDER_IMAGES,
  GALLARY_IMAGES,
  ALL_CLUBS,
  SELECT_CLUBS,
  SELECT_ALL_CLUBS,
  TITLES,
  SELECT_TITLES,
  SELECT_ALL_TITLES,
  DISTRICT_DATA,
  RESOURCE_DATA
} from "../constants/actionTypes";

const clientReducer = (
  state = {
    activityStats: [],
    events: { past: [{ image_path: "" }], upcoming: [{ image_path: "" }] },
    topClubs: [],
    sliderImages: [{ image: "" }],
    galleryImages: [{ image: "" }],
    resourceData:[{path:""}],
    allClubs: [],
    titles: [],
    districtData: [],
  },
  action
) => {
  switch (action.type) {
    case ACTIVITY_STATS:
      return { ...state, activityStats: action.payload };
    case EVENTS:
      return { ...state, events: action.payload };

    case TOPCLUBS:
      return { ...state, topClubs: action.payload };

    case SLIDER_IMAGES:
      return { ...state, sliderImages: action.payload };

    case GALLARY_IMAGES:
      return { ...state, galleryImages: action.payload };

    case ALL_CLUBS:
      return { ...state, allClubs: action.payload };

    case DISTRICT_DATA:
      return { ...state, districtData: action.payload };
    case SELECT_CLUBS:
      const selectedClubName = action.payload;
      const updatedClubs = state.allClubs.map((club) => {
        if (club.clubName === selectedClubName) {
          return {
            ...club,
            isChecked: !club.isChecked,
          };
        }
        return club;
      });
      return {
        ...state,
        allClubs: updatedClubs,
      };
    case SELECT_ALL_CLUBS:
      const isSelect = action.payload;
      return {
        ...state,
        allClubs: state.allClubs.map((club) => ({
          ...club,
          isChecked: isSelect,
        })),
      };

    case TITLES:
      return { ...state, titles: action.payload };

    case SELECT_TITLES:
      const selectedTitles = action.payload;
      const updatedTitles = state.titles.map((title) => {
        if (title.title === selectedTitles) {
          return {
            ...title,
            isChecked: !title.isChecked,
          };
        }
        return title;
      });
      return {
        ...state,
        titles: updatedTitles,
      };

    case SELECT_ALL_TITLES:
      const isChoose = action.payload;
      return {
        ...state,
        titles: state.titles.map((title) => ({
          ...title,
          isChecked: isChoose,
        })),
      };
    case RESOURCE_DATA:
      return { ...state, resourceData: action.payload };

    default:
      return state;
  }
};
export default clientReducer;
