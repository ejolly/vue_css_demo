<!-- Simple componenet that has a msg property that can be filled in dynamically by the main app or other components that use this component.  -->
<template>
  <div class="hello">
    <h1>Hello World</h1>
    <p><strong>{{ msg }}</strong></p>
      <p>
        This app demos css flexbox and grid. Navigate to the relevant pages using the links above. Also be sure to check out the comments in the source!
      </p>
      <p>
        Flexbox and Grid are nice simple alternatives to using a framework like Bootstrap or Bulma in order to arrange HTML elements with dynamic resizing and placement.
      </p>
      <p>
        This page doesn't use either or any special formatting! Resize it to see how things are not dynamic and get cutoff.
      </p>
      <img src="https://i1.wp.com/tasmemon.com/wp-content/uploads/2017/10/grid-vs-flexbox.png?resize=800%2C354" alt="flexboxvsgrid" />

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
p {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  /* These center an image and adding a little margin to the top  */
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
}
</style>
