const initialState = {
  refreshToken: null,
  accessToken: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        refreshToken: action.value.refreshToken,
        accessToken: action.value.accessToken,
      }
    case 'LOGOUT':
      return {
        ...state,
        refreshToken: null,
        accessToken: null,
      }
    case 'REFRESH_TOKEN':
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
    

    default:
      return state
  }
}
