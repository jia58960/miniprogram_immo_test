Page({
  data: {
    
  },

  toBindList:(e)=>{
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/bindlist/bindlist?index='+index,
    })
  },
});
