export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover: null,
  token: null,
  //for debugging process -sherin
  // token:
  //   "BQAOu2TCMRNr8bapXuBBL6Pmjp0SLn3bSeQGYYgkbhcyl7EmneqokiEERjgBAM3Ug0so_dvqsxsaISNw26N9DhlKVqd6ufg1yXjWB3OpsDqQlN0uRbgP-qBeDKyw1xsR6hfGhyyngAEjwzJ8P5SQlUvr9jAe2LH4USYXOClRhQIV80H8tgbg ",
};

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    case "SET_TOKEN": {
      return {
        ...state,
        token: action.token,
      };
    }
    case "SET_PLAYLIST": {
      return {
        ...state,
        playlists: action.playlists,
      };
    }
    case "SET_DISCOVER": {
      return {
        ...state,
        discover: action.discover,
      };
    }
    default: {
      return state;
    }
  }
}
export default reducer;
