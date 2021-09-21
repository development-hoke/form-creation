interface sumbitStyle {
  caption: string;
  color: string;
  background: string;
}

export interface State {
  footerSumbit: sumbitStyle
}

export enum ActionType {
  SET_SUBMIT_STYLE = 'SET_SUBMIT_STYLE',
}

export interface Action {
  type: ActionType;
  payload: any;
}

const Reducer = (state: State, action: Action): any => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_SUBMIT_STYLE:
      return {
        ...state,
        footerSumbit: payload,
      };
    default:
      break;
  }

  return state;
};

export default Reducer;