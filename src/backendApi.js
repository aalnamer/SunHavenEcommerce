import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://sunhaven.onrender.com";

class SunHavenApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${SunHavenApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser(username) {
    const token = localStorage.getItem("token");
    SunHavenApi.token = token;
    const response = await this.request(`users/${username}`);
    return response;
  }
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }
  static async register(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
  static async getAllProducts() {
    let res = await this.request(`products/`);
    return res;
  }
  static async getProductByCategory(category) {
    let res = await this.request(`category/${category}`);
    return res;
  }
  static async getProduct(id) {
    let res = await this.request(`products/${id}`);
    return res;
  }
  static async addToCart(data) {
    const token = localStorage.getItem("token");
    SunHavenApi.token = token;
    let req = await this.request(`cart/${data.username}`, data, "post");
    return req;
  }
  static async getCart() {
    const user = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    SunHavenApi.token = token;
    let res = await this.request(`cart/${user}`);
    return res;
  }
  static async removeFromCart(cartId) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    SunHavenApi.token = token;
    const response = await this.request(
      `cart/${username}`,
      { cartId },
      "delete"
    );
    return response;
  }
  static async getWishList(username) {
    let res = await this.request(`wishlist/${username}`);
    return res;
  }
  static async addToWishList(data) {
    const token = localStorage.getItem("token");
    SunHavenApi.token = token;
    let req = await this.request(`wishlist/${data.username}`, data, "post");
    return req;
  }
  static async removeFromWishList(data) {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    SunHavenApi.token = token;

    const response = await this.request(`wishlist/${username}`, data, "delete");
    return response;
  }
  static async payment(data) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    SunHavenApi.token = token;
    const response = await this.request(`payment/${user}`, data, "post");
    return response;
  }
  static async clearCart() {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    SunHavenApi.token = token;
    const response = await this.request(`payment/cart/${user}`, {}, "delete");
  }
  static async addToOrders(data) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("username");
    SunHavenApi.token = token;
    const response = await this.request(`payment/order/${user}`, data, "post");
    return response;
  }
}

export default SunHavenApi;
