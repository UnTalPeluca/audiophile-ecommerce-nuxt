export const useCartStore = defineStore("cart", {
  // State
  state: () => ({
    products: [],
    shippingCost: 50,
    vat: 20,
  }),
  // Getters
  getters: {
    getTotal: (cart) =>
      cart.products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ) || 0,
    getVat: (cart) => (cart.getTotal * cart.vat) / 100 || 0,
    getGrandTotal: (cart) => cart.getTotal + cart.getVat || 0,
  },
  // Actions
  actions: {
    addToCart(product, quantity = 1) {
      const item = this.products.find((item) => item.id === product.id);
      if (item) {
        item.quantity += quantity;
      } else {
        this.products.push({ ...product, quantity });
      }
    },
    removeFromCart(index) {
      this.products.splice(index, 1);
    },
    clearCart() {
      this.products = [];
    },
    removeOneFromCart(id) {
      const item = this.products.find((item) => item.id === id);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(id);
      }
    },
  },
});
