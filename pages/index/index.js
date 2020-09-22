Page({
  data:  {
    autoImageIndex:0,
    scrollLeft:0,
    width1:0,
    width2:0,
    move:0,
    jieliu1:true,//可触发
    image: [
      '../../image/autoimage/1.jpg',
      '../../image/autoimage/2.jpg',
      '../../image/autoimage/3.jpg',
      '../../image/autoimage/4.jpg',
      '../../image/autoimage/5.jpg',
      '../../image/autoimage/6.jpg',
    ],
    scroll: [
      [{
          src: '../../image/scroll/2.png',
          text: '天猫新品'
        },
        {
          src: '../../image/scroll/2.png',
          text: '充值中心'
        },
      ],
      [{
          src: '../../image/scroll/3.png',
          text: '今日爆款'
        },
        {
          src: '../../image/scroll/3.png',
          text: '机票酒店'
        },
      ],
      [{
          src: '../../image/scroll/4.png',
          text: '天猫国际'
        },
        {
          src: '../../image/scroll/4.png',
          text: '金币庄园'
        },
      ],
      [{
          src: '../../image/scroll/5.png',
          text: '饿了么'
        },
        {
          src: '../../image/scroll/5.png',
          text: '阿里拍卖'
        },
      ],
      [{
          src: '../../image/scroll/1.png',
          text: '天猫超市'
        },
        {
          src: '../../image/scroll/1.png',
          text: '淘宝吃货'
        },
      ],
      [{
          src: '../../image/scroll/2.png',
          text: '分类'
        },
        {
          src: '../../image/scroll/2.png',
          text: '咸鱼'
        },
      ],
      [{
          src: '../../image/scroll/3.png',
          text: '天猫美食'
        },
        {
          src: '../../image/scroll/3.png',
          text: '会员中心'
        },
      ],
      [{
          src: '../../image/scroll/4.png',
          text: '阿里健康'
        },
        {
          src: '../../image/scroll/4.png',
          text: '造点新货'
        },
      ],
      [{
          src: '../../image/scroll/5.png',
          text: '口碑生活'
        },
        {
          src: '../../image/scroll/5.png',
          text: '主货鲜食'
        },
      ],[{
        src: '../../image/scroll/5.png',
        text: '口碑生活'
      },
      {
        src: '../../image/scroll/5.png',
        text: '主货鲜食'
      },
    ]
    ],
    recommed: [{
      isImage: false,
      title: "聚划算",
      title2: "",
      imagesrc: "",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: false,
      title: "聚划算",
      title2: "真划算",
      imagesrc: "",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }, {
      isImage: true,
      title: "",
      title2: "",
      imagesrc: "../../image/three/title.png",
      arr: [{
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }, {
        title: "这里是六个字",
        src: "../../image/three/1.jpg"
      }]
    }]
  },
  indicator_fn(e){
    this.setData({
      autoImageIndex:e.detail.current
    })
  },
  scroll_fn(e){
    //  获取可移动的距离
    var move=this.data.width2-this.data.width1;
    // 计算已移动的距离和可移动距离的百分比
    this.data.move=(e.detail.scrollLeft/move)*50;

   
    if(this.data.jieliu1){
      this.data.jieliu1=false;
      setTimeout(() => {
        this.data.jieliu1=true;
        this.setData({
          scrollLeft:this.data.move+'%'
        })
      }, 16);
   }
  },
  // 渲染完成时获取组件的参数
  onReady: function () {
    var that=this;
    wx.createSelectorQuery().select('#scroll1').fields({
      size: true,
    }, function (res) { 
      res.width      // 节点的宽度
    }).exec(function(e){
      console.log(e[0].width,1)
      that.setData({
        width1:e[0].width
      })
    })
    wx.createSelectorQuery().select('#scroll2').fields({
      size: true,
    }, function (res) { 
      res.width      // 节点的宽度
    }).exec(function(e){
      console.log(e[0].width,2)
      that.setData({
        width2:e[0].width
      })
    })
  },
  
})
