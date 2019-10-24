import {
  userReigsterApi,
  getUserInfoApi,
} from './api';

export const FETCH_REGISTER_USER = 'fetchRegisterUser';

export const FETCH_USER_INFO = 'fetchUserInfo';

export const FETCH_COMMENTS = 'fetchComments';

export const SET_COMMENTS = 'setComments';

const initialState = {
  userInfo: {
  },
  article: {
    author: {},
    title: '',
    description: '',
    body: '',
    tagList: [],
  },
  comments: [],
};

export const state = { ...initialState };

export const actions = {

  async [FETCH_REGISTER_USER](context, articleSlug) {
    const { data } = await userReigsterApi(articleSlug);
    context.commit(FETCH_COMMENTS, data.comments);
    return data.comments;
  },

  async [FETCH_USER_INFO](context, articleSlug) {
    const { data } = await getUserInfoApi(articleSlug);
    context.commit(FETCH_COMMENTS, data.comments);
    return data.comments;
  },
};


export const mutations = {
  [SET_COMMENTS](state, comments) {
    state.comments = comments;
  },
};

const getters = {
  article(state) {
    return state.article;
  },
  comments(state) {
    return state.comments;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
