<template>
    <div v-if="data" class="slide">
        <div class="slide__wrapper">
        <div
            v-show="index === page"
            v-for="(image, index) in images"
            :key="index"
            class="item"
        >
            <img :src="image" class="item__image" />
            <span v-show="index === page" class="item__label">{{ index + 1 }}</span>
        </div>
        <div class="slide__right-btn" @click="nextPage"></div>
        <div class="slide__left-btn" @click="prevPage"></div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Hooper, 
         Slide,
         Pagination as HooperPagination, // ページネーションが必要なときにimport
         Navigation as HooperNavigation  // 左右のナビゲーションが必要なときにimport
        } from 'hooper'
import 'hooper/dist/hooper.css' // hooperのcssを適用
export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  }
}
</script>

<style lang="scss" scoped>
.slide {
  padding-top: 200px;
  &__wrapper {
    position: relative;
    width: 500px;
    height: 300px;
    margin: 0 auto;
  }
  &__right-btn {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 10;
  }
  &__left-btn {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 10;
  }
}

.item {
  position: relative;
  &__label {
    position: absolute;
    top: 4px;
    left: 4px;
    background-color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    z-index: 999;
  }
}
</style>
