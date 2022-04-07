app.component("product-details", {
  props: {
    details: {
      type: String,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div>
    <h2>
    Product Details
    </h2>
    <p>{{details}}</p>
    </div>
    `,
});
