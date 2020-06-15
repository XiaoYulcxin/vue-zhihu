<template>
  <div id="card">
    <div id="top">
      <slot name="pic">
        <img src alt />
      </slot>
      <slot name="username">
        <div class="username"></div>
      </slot>
    </div>
    <slot name="title">
      <div class="title"></div>
    </slot>
    <div id="content">
      <slot name="image">
        <img src alt />
      </slot>
      <slot name="paragraph">
                    
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card"
};
</script>
<style scoped>
#card {
  width: 580px;
  padding-top: 15px;
  padding-left: 15px;
}
#top {
}
#top:after {
  display: block;
  content: "";
  visibility: hidden;
  height: 0;
  clear: both;
}
#top img {
  float: left;
  border-radius: 20px;
}
#top .username {
  float: left;
  padding-left: 10px;
  font: 14px/30px "微软雅黑";
}
.title{
  font: 20px/30px "微软雅黑";
  font-weight: bold;
}
#content img{
  float: left;
  width: 200px;
  height: 100px;      
}
#content .paragraph{
  font: 14px/30px "微软雅黑";
  width: 360px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  float: right;
}
#content:after {
  display: block;
  content: "";
  visibility: hidden;
  height: 0;
  clear: both;
}
</style>
