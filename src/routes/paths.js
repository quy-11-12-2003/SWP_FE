export function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "";
export const ROOTS_APP = "";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  register: path(ROOTS_AUTH, "/register"),
};

export const PATH_APP = {
  root: ROOTS_APP,
  products: {
    index: path(ROOTS_APP, "/products"),
    viewDetail: (id) => path(ROOTS_APP, `/products/${id}`),
  },
  profile: {
    index: path(ROOTS_APP, "/users/profile"),
  },
  purchase: {
    index: path(ROOTS_APP, "/users/purchase"),
  },
  checkout: path(ROOTS_APP, "/checkout"),
};
