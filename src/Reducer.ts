interface sumbitStyle {
  caption: string;
  color: string;
  background: string;
}

export interface CParagraph {
  id: number,
  type: string,
  text: string
}

export interface State {
  isStart: boolean
  components: (CParagraph)[]
  footerSumbit: sumbitStyle
  maxId: number,
}

export enum ActionType {
  SET_IS_START = 'SET_IS_START',
  SET_COMPONENT = 'SET_COMPONENT',
  SET_SUBMIT_STYLE = 'SET_SUBMIT_STYLE',
  SET_MAX_ID = 'SET_MAX_ID'
}

export interface Action {
  type: ActionType;
  payload: any;
}

const Reducer = (state: State, action: Action): any => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.SET_IS_START:
      return {
        ...state,
        isStart: payload,
      };
    case ActionType.SET_COMPONENT:
      return {
        ...state,
        components: payload,
      };
    case ActionType.SET_SUBMIT_STYLE:
      return {
        ...state,
        footerSumbit: payload,
      };
    case ActionType.SET_MAX_ID:
      return {
        ...state,
        maxId: payload,
      };
    default:
      break;
  }

  return state;
};

export default Reducer;