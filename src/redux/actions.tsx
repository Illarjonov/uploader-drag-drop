export enum ActionTypes {
  SET_TEXT = 'SET_TEXT',
  SET_IMAGE = 'SET_IMAGE',
  SET_CHANGE_TEXT = 'SET_CHANGE_TEXT',
  SET_CHANGE_IMAGE = 'SET_CHANGE_IMAGE',
  SET_IS_OPEN_MODAL_IMAGE = 'SET_IS_OPEN_MODAL_IMAGE'
}



interface SetImage {
  type: ActionTypes.SET_IMAGE;
  payload: string;
}
export const setImage = (image: string): SetImage => {
  return {
    type: ActionTypes.SET_IMAGE,
    payload: image
  }
}

interface SetText {
  type: ActionTypes.SET_TEXT;
  payload: string;
}
export const setText = (text: string): SetText => {
  return {
    type: ActionTypes.SET_TEXT,
    payload: text
  }
}

interface SetChangeText {
  type: ActionTypes.SET_CHANGE_TEXT;
  payload: boolean;
}
export const setChangeText = (payload: boolean): SetChangeText => {
  return {
    type: ActionTypes.SET_CHANGE_TEXT,
    payload: payload
  }
}

interface SetChangeImage {
  type: ActionTypes.SET_CHANGE_IMAGE;
  payload: boolean;
}
export const setChangeImage = (payload: boolean): SetChangeImage => {
  return {
    type: ActionTypes.SET_CHANGE_IMAGE,
    payload: payload
  }
}

interface SetIsOpenModalImage {
  type: ActionTypes.SET_IS_OPEN_MODAL_IMAGE;
  payload: boolean;
}
export const setIsOpenModalImage = (payload: boolean): SetIsOpenModalImage => {
  return {
    type: ActionTypes.SET_IS_OPEN_MODAL_IMAGE,
    payload: payload
  }
}




export type Action = SetText | SetImage | SetChangeText | SetChangeImage | SetIsOpenModalImage

// interface MoreFetched {
//   type: ActionTypes.MOREFETCHED;
//   payload: {
//     books: BookI[];
//     totalCountBooks: number;
//   }
// }

// const morefetched = (data: BookI[], count: number): MoreFetched => {
//   return {
//     type: ActionTypes.MOREFETCHED,
//     payload: {
//       books: data,
//       totalCountBooks: count
//     }

//   }
// }

// interface FirstFetched {
//   type: ActionTypes.FIRSTFETCHED;
//   payload: {
//     books: BookI[];
//     totalCountBooks: number;
//   }
// }

// const firstfetched = (data: BookI[], count: number): FirstFetched => {
//   return {
//     type: ActionTypes.FIRSTFETCHED,
//     payload: {
//       books: data,
//       totalCountBooks: count
//     }
//   }
// }


// interface ChangeOptions {
//   type: ActionTypes.CHANGEOPTIONS;
//   payload: {
//     subject: string,
//     searchText: string,
//     sortBy: string,
//   }
// }

// const changeoptions = (subject: string, searchText: string, sortBy: string): ChangeOptions => {
//   return {
//     type: ActionTypes.CHANGEOPTIONS,
//     payload: {
//       subject: subject,
//       searchText: searchText,
//       sortBy: sortBy,
//     }
//   }
// }

// interface SetSmallLoader {
//   type: ActionTypes.SETSMALLLOADER;
//   payload: boolean;
// }

// const setsmallloader = () => {
//   return {
//     type: ActionTypes.SETSMALLLOADER,
//     payload: true
//   }
// }

// export const search = (subject: string, searchText: string, sortBy: string, offset: number, type: "more" | "first"): ThunkAction<void, {}, {}, AnyAction> => {
//   return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
//     // запуск лоадера по усл.
//     dispatch(type === "first" ? setloader() : setsmallloader())
//     API.fetchBooks(subject, searchText, sortBy, offset)
//       .then((res: any): void => {
//         if (res.status === 200) {

//           const responseBooks = res.data.items ? res.data.items.map((item: any) => item.volumeInfo) : []
//           // 2 кнопки. При первой = сейвятся значения поиска. При второй = используются засейвленые значения в поиске (в компоненте подгружаются значения из стора)
//           if (type === "first") {
//             dispatch(changeoptions(subject, searchText, sortBy))
//             dispatch(firstfetched(responseBooks, res.data.totalItems));
//           }
//           if (type === "more") {
//             dispatch(morefetched(responseBooks, res.data.totalItems))
//           }
//         }
//       })
//   }
// }
