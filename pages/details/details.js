// pages/detail/detail.js
import { fetch } from '../../utils/util.js'
Page({
  data: {
   bookId:"",
   bookData:{}
  },
  onLoad: function (options) {
    this.setData({
      bookId:options.id
    })
     this.getData()
  },
 getData(){
   fetch.get(`/book/${this.data.bookId}`).then(res=>{
     console.log(res)
     this.setData({   
       bookData:res
     })
   })
 },
  jumpCatalog() {
    wx.navigateTo({
      url: `/pages/catalog/catalog?id=${this.data.bookId}`,
  // success:function(res){},
  // fail:function(res){},
  // complete:function(res){},
    })
  },
 onShareAppMessage: function () { }
})