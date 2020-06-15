<template>
  <div class="about">
    <ul>
      <li v-for="(item,index) in datalist" :key="index">
        <Card>
          <img :src="item.pic" alt="" slot="pic"/>
          <div class="username" slot="username">{{item.username}}</div>
          <div class="title" slot="title">{{item.title}}</div>
          <img :src="item.image" alt slot="image"/>
          <div class="paragraph" slot="paragraph">{{item.paragraph}}</div> 
        </Card>
      </li>
    </ul>
  </div>
</template>
<script>
import Card from '@/views/Card.vue'
import {request} from '../utils/request'

export default {
  name:'About',
  data(){
    return{
      datalist:''
    }
  },
  components:{
    Card
  },
  created(){
    request('http://lcxin.com', su=>{this.datalist = su}, fa=>{console.log(fa)})
  }
}
</script>
<style>
li{
  list-style: none;
}
.about{
	background-color: white;
}
</style>
