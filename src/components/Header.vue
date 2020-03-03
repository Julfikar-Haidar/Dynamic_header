<template>
    <div>

  <thead>
    <tr>
<!--      <th scope="col" >{{headerContent}}</th>-->

      <th scope="col" v-for="headerContent in headerContent" :key="headerContent" >{{headerContent}}</th>

    </tr>
  </thead>


    </div>
</template>

<script>
    export default {
        name: "Header",
        props:["headerContent"]

    }
</script>

<style scoped>

</style>