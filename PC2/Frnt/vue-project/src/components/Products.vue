<template>
  <div>
    <h1>Productos</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>          
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id" >
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.availability.toString() }}</td>
          <td>
            <button @click="deleteproduct(product._id)" >Eliminar</button>
          </td>
          <td>
            <button @click="Updateproduct(product)" >Actualizar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
      <h1>Crear Producto</h1>
      <div>
        <label for="name">Nombre: </label>
        <input type="text" id="name" v-model="product.name">
      </div>
      <div>
        <label for="price">Años: </label>
        <input type="text" id="price" v-model="product.price">
      </div>
      <div>
        <label for="stock">stock: </label>
        <input type="text" id="stock" v-model="product.stock">
      </div>
      <div>
        <label for="disponibilidad">disponibilidad: </label>
        <input type="checkbox" id="availability" v-model="product.availability">
      </div>
      <input type="hidden" id="id"  v-model="product._id">
      <button @click="createproduct">Crear/Actualizar Producto</button>
  </div>


</template>

<script>
export default {
 data(){
  return { 
    products: [],
    product:{
      id: '',
      name: '',
      stock: 0,
      price: 0,
      availability: false
    }
  };
 },
 async  created(){
      try {
        const response = await fetch('http://localhost:3200/api/products');
        if(!response.ok){
          throw new Error('Error al acceder a la BD');
        }
        const data = await response.json();
        this.products = data;
        console.log(data);
      }
      catch(error){
        console.log(error);
      }
    },
 methods:{
  
  async createproduct(){
    console.log('Intentando crear Producto:', this.product);

    try{
      let id = document.getElementById("_id"); 

      let response;

      if (id.length > 0){
        response = await fetch('http://localhost:3200/api/product',{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(this.product),
      });
      }else{
        response = await fetch('http://localhost:3200/api/product',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(this.product),
      });
      }      

      if(!response.ok){
        const errorData = await response.json();
        throw new Error('Error al crear Producto: ' + errorData.messprice);
      }

      const responseData = await response.json();
      console.log('Producto creado: ', responseData);
      this.resetForm();
      this.products.push(responseData);
      
    } catch(error){
      console.error('Error en createproduct:', error);
    }
  },
  async Updateproduct(product){
    console.log(product);
    console.log(product._id);
    document.getElementById("id").value = product._id;
    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("stock").value = product.stock;
    document.getElementById("availability").checked = product.availability;    
  },
  async deleteproduct(productId){
    console.log(productId);
    if(confirm('¿Estas seguro de eliminar a este Producto')){
      try{
        const response = await fetch(`http://localhost:3200/api/product/${productId}`,{
          method:'DELETE'
        });
        if(!response.ok){
          throw new Error('Error al eliminar Producto');
        }
        this.products = this.products.filter(product =>product._id !== productId);
        console.log(response);
      }catch(error){
        console.log(error);
      }
    }
  },
  resetForm(){
    this.product = {
      _id: '',
      name: '',
      stock:0,
      price: 0,
      availability: false
    }
  }
 }

   
 
 
}
</script>


<style scoped>

  table{
    width: 100%;
    border-collapse: collapse;
  }
  th,td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
</style>
