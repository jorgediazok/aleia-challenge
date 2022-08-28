const initialState = {
  isOpen: false,
};

export function menuReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
