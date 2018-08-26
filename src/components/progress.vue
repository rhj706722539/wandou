<template>
  <div class="zs-progress">
      <div class="page-progress">
          <div class="progress-content">
              <div class="progress-runway" ></div>
              <div class="progress-progress" :style="{width:ratio}"></div>
          </div>
          <div class="progress-ratio">{{ratio}}</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name:'zs-progress',
    props:{
        rate:Number,
        speed:Number,
    },
    computed: {
        ratio(){
            let ratio = "0%";
            if(this.speed != undefined && this.rate != undefined){
                ratio = ((this.rate/this.speed)*100).toFixed(0) + '%';
                return ratio;
            }else{
                return ratio;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.page-progress {
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: relative;
    display: flex;
    top: 5px;
    .progress-content {
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        .progress-runway {
            left: 0;
            right: 0;
            background-color: #ffffff;
            border: 1px solid #ebebeb;
            border-radius: 5px;
            height: 8px;
            position: absolute;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            top: 50%;
        }
        .progress-progress {
            position: absolute;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            top: 50%;
            display: block;
            border-radius: 5px;
            background-color: #68A2E5;
            width: 90%;
            height: 8px;
        }
    }
    .progress-ratio {
        font-size: 12px;
        color: #68A2E5;
        margin-left: 7px;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-box;
    }
}
</style>
