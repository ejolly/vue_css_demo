<!-- Demo of flex grid css as an alternative to library like bootstrap -->
<!-- The comments/explanations here build off of FlexyBox.vue so start there. -->
<!-- The main difference is between grid and box is that it allows for 2d (row and column) flexible layouts. Whereas flexbox is primarily designed for 1d (row or column) layouts. It's technically possible to achieve with box what you can with grid but it requires way more settings and adjustments.-->
<template name="Gridy">
  <div class="component-container">
    <div class="title-box">
      <h1>These are CSS Grids</h1>
      <h3 style="text-align: center">
        This page contains 3 different CSS grids. None will rearrange based on screen size but will resize.
      </h3>
    </div>
    <div class="grid">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
    <div class="grid2">
      <div>
        Lorem ipsum dolor sit.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div class="nested">
        <div>Grids</div>
        <div>Inside</div>
        <div style="text-align: center">Of</div>
        <div>Other</div>
        <div>Grids</div>
        <div>Amazing</div>
      </div>
      <div>
        Lorem ipsum dolor sit.
      </div>
      <div>
        Lorem ipsum dolor sit.
      </div>
      <div>
        Lorem ipsum dolor sit.
      </div>
      <div>
        Lorem ipsum dolor sit.
      </div>
    </div>
    <div class="grid3">
      <div class="box box1">Box 1<br> This is really what distinguish grids from flexbox. We can specify that this box should extend from column "marker" 1 to 3 and row "marker" 1 to 3. "marker" here is the implicit division of the css grid (i.e. the lines you might draw by hand if you were carving up what the grid looks like on paper).
        grid-column:1/3;
        grid-row:1/3; </div>
      <div class="box box2">Box 2<br> we can constrain what columns this box takes up while also justifying its vertical position with respect to where the div starts.</div>
      <div class="box box3">Box 3<br>By starting this box at grid column 2 it has the effect of coming after box 4, much like how we changed the order with flexbox order.</div>
      <div class="box box4">Box 4<br> Grid also allows you to overlap grid items without adding negative margins etc. </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gridy',
}
</script>

<style>

/* Using the CSS grid on .grid with a column layout such that theyre spaced with the percentages below. */
.grid {
  display: grid;
  /* Notice that we don't need to create rows, it automatically will follow them even though we have more than two divs above.  */
  grid-template-columns: 70% 30%;
  /* apply same spacing between rows and column, alt to below  */
  grid-gap: 1em;
  /* Add spacing between columns */
  /* grid-column-gap: 1em; */
  /* Add spacing between rows */
  /* grid-row-gap: 1em; */
}

.grid2 {
  margin-top: 1.5rem;
  display: grid;
  /* Use fractions (recommended) to split up grid elems. This makes it easier to auto-handle margins and padding with more complicated layouts.  */
  grid-template-columns: 1fr 2fr 1fr;
  /* Alt syntax to repeat certain layouts, e.g repeat a 1fr 2fr spacing 4 times
  grid-template-columns: repeat(4, 1fr 2fr); */
  grid-gap: 1em;
  /* Fix each row to be 100px tall irrespective of content size  */
  /* grid-auto-rows: 100px; */
  /* Fix each row to be 100px minimum but stretch the content if it goes beyond that */
  grid-auto-rows: minmax(100px,auto);
}

.nested {
  /* We're putting a grid within another grid element here, making it have 3 columns and fixing the heights to 70px, with a 1em gap between them. */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 70px;
  grid-gap: 1em;
}

.nested > div {
  /* Just add some borders and padding the nested grid elements. */
  border: #333 1px solid;
  padding: 1em;
}

.grid3 {
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px,auto);
  grid-gap: 1em;
  /* Control how the boxes are justified (vertical) and aligned (horizontal) with respect to where the div starts similar to flexbox (e.g. start, end, center, stretch (default))  */
  justify-items: stretch;
  align-items: stretch;
}

/* align-self allows you to adjust individual grid elements rather than all of them simulataneously  */
.box1 {
  align-self: start;
  /* these settings are really what distinguish grids from flexbox. We can specify that this box should extend from column "marker" 1 to 3 and row "marker" 1 to 3. "marker" here is the implicit division of the css grid (i.e. the lines you might draw by hand if you were carving up what the grid looks like on paper) */
  grid-column:1/3;
  grid-row:1/3;

}
.box2 {
  align-self: end;
  grid-column: 3;
  grid-row: 1/3;

}
.box3 {
  /* justify-self: end; */
  /* By starting this box at grid column 2 it has the effect of coming after box 4, much like how we changed the order with flexbox order.  */
  grid-column: 2/4;
  grid-row: 3;
}
.box4 {
  /* Grid also allows you to overlap grid items without adding negative margins etc. */
  grid-column: 1;
  grid-row: 2/4;

}
/* Give each div directly within each .grid class a grey background and some padding */
.grid > div, .grid2 > div, .grid3 > div{
  background: #eee;
  padding: 1em;
}
/* give every other div directly within the .grid class a slightly different shade of gray  */
.grid > div:nth-child(odd), .grid2 > div:nth-child(odd), .grid3 > div:nth-child(odd){
  background: #ddd;
}



</style>
