<!-- This is a router page that simply loads up the HelloWorld component.  -->
<template>
  <div class="home">
    <HelloWorld msg="Vue App to Demo CSS Flexbox and Grid"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
