<template>
  <hooper>
    <slide>
      slide 1
    </slide>
    <slide>
      slide 2
    </slide>
    <slide>
      slide 3
    </slide>
    <slide>
      slide 4
    </slide>
    <slide>
      slide 5
    </slide>
    <slide>
      slide 6
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
  } from 'hooper';
import 'hooper/dist/hooper.css' // hooperのcssを適用

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
}
</script>
