import { Post } from '../interfaces/post'; 

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

type Action = 
  | { type: 'SET_POSTS'; payload: Post[] };

export const postsReducer = (state = initialState, action: Action): PostsState => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
