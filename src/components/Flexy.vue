<!-- Demo of flex box css as an alternative to library like bootstrap -->
<!-- By default divs appear one above another. Flex settings in the css allow us to let them appear side-by-side and dynamically resize a lot like Bootstrap. -->
<template name="FlexyBox">
  <div class="component-container">
    <div class="title-box">
      <h1>This is CSS Flexbox</h1>
      <h3 style="text-align: center">
        The first two rows are also sensitive to screen size and will dynamically rearrange as the window size changes. The last row will not.
      </h3>
    </div>
    <div class="container-1">
      <div class="box-1">
        <h3>Box One</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae, vero ab.</p>
      </div>
      <div class="box-2">
        <h3>Box Two</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae, vero ab.</p>
      </div>
      <div class="box-3">
        <h3>Box Three</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam beatae, vero ab.</p>
      </div>
    </div>
    <div class="container-2">
      <div class="container-2-box">
        <h3>Box Four</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="container-2-box">
        <h3>Box Five</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="container-2-box">
        <h3>Box Five</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
    <div class="container-3">
      <div class="container-3-box">
        <h3>Box Seven</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="container-3-box">
        <h3>Box Eight</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="container-3-box">
        <h3>Box Nine</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="container-3-box">
        <h3>Box Ten</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="container-3-box">
        <h3>Box Eleven</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="container-3-box">
        <h3>Box Twelve</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexyBox',
}
</script>

<style>
/* Using the media query the flex box will automatically break into rows rather than side-by-side when the screen size gets sufficiently small */
@media (min-width:768px) {
  .container-1{
    /* display flex makes the divs appear side by side  */
    display: flex;
    /* the default here is "stretch" so each div is the same height. But the options below allow us to change the height of each div if the amount if the content size isn't the same. start and end change how the box is positioned relative to the start (top) or end (bottom) of its containing div */
    /* align-items: flex-start; */
    /* align-items: flex-end; */
    /* align-items: center; */
  }
  .container-2{
    /* This time put the boxes side-by-side by leave a bit of gap between and around them  */
    display: flex;
    justify-content: space-around;
  }
}

.container-1 div, .container-2 div, .container-3 div{
  border: 1px #ccc solid;
  padding: 10px;
}
.box-1{
  /* Make box 1 a little wider than the others and change its order of appearance */
  flex: 2;
  order: 2;
}
.box-2{
  flex: 1;
  order: 1;
}
.box-3{
  flex: 1;
  order: 3;
}

.container-2-box{
  /* This is the same thing as setting width. It sets how much room each box should be taking of its allotted flex space. */
  flex-basis: 20%;
}

.container-3{
  /* For this container we're not going to have it change dynamically with the size of the screen. Instead we're going to have it wrap around when the content doesnt fit on the screen.  */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container-3-box{
  flex-basis: 10%;
}
h1 {
  text-align: center;
}
</style>
