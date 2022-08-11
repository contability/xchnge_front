export const URL = "http://users.defi1.net:33845";
export const EX1_URL = "http://users.ex1.one:38321";

export const API = {
  API_SIGNIN: URL + "/users/login",
  API_SIGNOUT: URL + "/users/logout",
  API_GET_APIKEY: URL + "/users/get/apikey",

  API_POST_SET_POSITIONS: URL + "/orders/set/positions",    // ?apikey=

  API_GET_MARGIN_POSITIONS: URL + "/users/marginpositions",   // ?apikey=
  API_GET_MARGIN_POSITIONS_LOG: URL + "/users/marginpositions/log",  // /:username

  API_GET_EVALUATE: URL + "/queries/rows/evaluates/username",  // /:username/:offset/:limit/id/DESC
  API_POST_DELETE_POSITION: URL + "/users/quit/marginposition",   // {uuid, username}

  API_POST_USER_HOLDING_INIT: URL + "/users/init",
  API_GET_MYPROFIT_LOSS: URL + "/users/myprofitloss",   // /:username
  API_POST_QUIT_MARGINPOSITIONS: URL + "/users/quit/marginposition",
  API_POST_MARGINPOSITIONS: URL + "/orders",

  API_POST_ORDERS: EX1_URL + "/orders/order",    // /:market/:asset/:type/:amount/:price
  API_GET_ORDERS: EX1_URL + "/queries/rows/orders/marketsymbol",   // /:marketsymbol/:offset/:limit/price/DESC?filterkey=username&filterval={username}
  API_GET_LOGFILLS: EX1_URL + "/queries/rows/logfills/username",    // /:username/:offset/:limit/updatedat/DESC
};
