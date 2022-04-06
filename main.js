const app = Vue.createApp({
  data() {
    return {
      isButtonDisabled: false,
      isDecrementButtonDisabled: true,
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.isDecrementButtonDisabled = !this.cart > 0;
      this.cart += 1;
      this.isButtonDisabled = this.cart === 10;
    },
    updateImage(image) {
      this.image = image;
    },

    decrementCart() {
      this.isDecrementButtonDisabled = this.cart <= 0;
      this.cart -= 1;
    },
  },
});
