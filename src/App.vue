<template>
  <div id="app">
    <div class="text_center">
      <img src="./assets/img/logo.svg">
    </div>
    <router-view/>
  </div>

</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Open Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #4A4A4A;
    font-size: 12px;
    line-height: 20px;
    margin-top: 60px;
  }

  .t24 {
    font-size: 24px;
  }

  .t13 {
    font-size: 13px;
  }

  .t14 {
    font-size: 14px;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .d-block {
    display: block;
  }

  .d-inline-block {
    display: inline-block;
  }

  .d-none {
    display: none !important;
  }

  .container {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .main_col {
    width: calc(100% - 250px);

    &:first-child:last-child {
      width: 100%;
    }
  }

  .w33 {
    width: 33%;
  }

  .left_sidebar {
    width: 230px;
    margin-right: auto;
  }

  .right_sidebar {
    width: 230px;
    margin-left: auto;
  }

  .text_center {
    text-align: center;
  }

  .jc_between {
    justify-content: space-between;
  }

  .jc_center {
    justify-content: center;
  }

  .ai_center {
    align-items: center;
  }

  .ai_start {
    align-items: flex-start;
  }

  .white_bg {
    background: #FFFFFF;
  }

  .box_shadow {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }

  .bor_rad_5 {
    border-radius: 5px;
  }

  .bor_rad_5_l {
    border-radius: 5px 0 0 5px;
  }

  .bor_rad_5_r {
    border-radius: 0 5px 5px 0;
  }

  .bor_rad_5_t {
    border-radius: 5px 5px 0 0;
  }

  .bor_rad_5_b {
    border-radius: 0 0 5px 5px;
  }

  .m10 {
    margin: 10px;
  }

  .m10-tb {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .m10-rl {
    margin-left: 10px;
    margin-right: 10px;
  }

  .m10-b {
    margin-bottom: 10px;
  }

  .m10-l {
    margin-left: 10px;
  }

  .m10-t {
    margin-bottom: 10px;
  }

  .m10-r {
    margin-right: 10px;
  }

  .m25-tb {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .m25-rl {
    margin-left: 25px;
    margin-right: 25px;
  }

  .m25-b {
    margin-bottom: 25px;
  }

  .m25-l {
    margin-left: 25px;
  }

  .m25-t {
    margin-bottom: 25px;
  }

  .m25-r {
    margin-right: 25px;
  }

  .p25-tb {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .p25-rl {
    padding-left: 25px;
    padding-right: 25px;
  }

  .p25-b {
    padding-bottom: 25px;
  }

  .p25-l {
    padding-left: 25px;
  }

  .p25-t {
    padding-bottom: 25px;
  }

  .p25-r {
    padding-right: 25px;
  }

  .p20-tb {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .p20-rl {
    padding-left: 20px;
    padding-right: 20px;
  }

  .p20-b {
    padding-bottom: 20px;
  }

  .p20-l {
    padding-left: 20px;
  }

  .p20-t {
    padding-top: 20px;
  }

  .p20-r {
    padding-right: 20px;
  }

  .p10-tb {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .p10-rl {
    padding-left: 10px;
    padding-right: 10px;
  }

  .p10-b {
    padding-bottom: 10px;
  }

  .p10-l {
    padding-left: 10px;
  }

  .p10-t {
    padding-bottom: 10px;
  }

  .p10-r {
    padding-right: 10px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .bordered {
    border: 1px solid #DFE5EC;
  }

  .hover_bg:hover {
    background: #F1FCFF;
  }

  .hover_white_text:hover {
    color: #ffffff;
  }

  .text_600 {
    font-weight: 600;
  }

  .grey_text {
    color: #A0B0B9;
  }

  .blue_text {
    color: #2196F3;
  }

  ul {
    list-style: none;
  }

  .checkbox {
    display: block;
    border: 1px solid #9ABBCE;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    transition: .3s all;
    position: relative;
    cursor: pointer;

    &.checked {
      border-color: #2196F3;

      &:after {
        opacity: 1;
        transform: rotate(-45deg) scale(1);
      }
    }

    &:after {
      display: block;
      content: '';
      position: absolute;
      width: 11px;
      height: 5px;
      border-bottom: 2px solid #2196F3;
      border-left: 2px solid #2196F3;
      transform: rotate(0deg) scale(1.8);
      transition: .3s all;
      left: 2px;
      top: 3px;
      opacity: 0;
    }
  }
</style>
