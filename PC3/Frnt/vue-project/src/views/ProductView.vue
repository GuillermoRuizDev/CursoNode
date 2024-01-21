<template>
    <div class="product">
      <Product />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Product from "@/components/product.vue";
  
  export default {
    name: "Product",
    components: {     
        Product,
    },
  };
  </script>