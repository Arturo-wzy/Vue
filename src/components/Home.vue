<template>
  <div style="background-color: #F8F8FF">
    <div class="top"></div>

    <el-carousel indicator-position="outside" height="620px">
      <el-carousel-item v-for="item in items" :key="item" >
        <img :src="item">
      </el-carousel-item>
    </el-carousel>

    <div class="title">
      <h2>上新了，<span>快来认识一下这些新朋友。</span></h2>
    </div>

    <div class="list">
      <div class="listitem" v-for="item in JSON.parse(this.$cookies.get('list'))" :key="item" name="list">
        <div style="padding-left:30px;height:130px;">
          <h5 style="color: #696969">{{item.class}}</h5>
          <h2>{{ item.detail }}</h2>
          <h4 style="color: #696969">RMB {{item.price}}</h4>
        </div>
        <img :src="item.img" style="width: 360px;height: 300px;margin-left: 10px">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data(){
    this.$cookies.get('item')
    this.$cookies.get('list')
    if(this.$cookies.get('item')!=null && this.$cookies.get('list')!=null){
      console.log("这是从cookie中获取的数据")

      let url=[]
      for(let i=0;i<JSON.parse(this.$cookies.get('item')).length;i++){
        url[i]=JSON.parse(this.$cookies.get('item'))[i].img
        // console.log(url[i])
      }
      this.items=url
      // console.log(this.items)

    }else{
      this.$ajax.get('/goods').then((res) =>{
        console.log("没有成功")
        console.log("这是从接口中获取的数据")

        let url=[]
        for(let i=0;i<res.data.length;i++){
          url[i]=res.data[i]
        }
        this.$cookies.set('item',JSON.stringify(url),'1D')
      })
      this.$ajax.get('/list').then((res) =>{
        let list=[]
        for(let i=0;i<res.data.length;i++){
          list[i]=res.data[i]
        }
        this.$cookies.set('list',JSON.stringify(list),'1D')
      })
    }
    return{

    }
  },
}
</script>


<style scoped>

.top{
  position: sticky;
  top:0px;
  height: 40px;
  width: 100%;
  background-color: #444;
}

.el-carousel__item{
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.el-carousel__item img{
  margin-bottom: 30px;
  height: 600px;
  width: 100%;
}

.title{
  margin-top: 60px;
  margin-left: 15%;
}
.title span{
  color: dimgray;
  font-weight: lighter;
}

.list{
  width: 60%;
  margin-left: 15%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.listitem{
  width: 380px;
  height: 460px;
  margin-top: 40px;
  margin-left: 30px;
  background-color: white;
  border-radius: 20px;
  box-shadow:0px 0px 8px 0.1px 	#DCDCDC;
}
.listitem:hover{
  box-shadow:0px 0px 20px 0.8px 	#DCDCDC;
  width: 382px;
  height: 462px;
}


</style>