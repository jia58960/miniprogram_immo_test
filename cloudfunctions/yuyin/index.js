// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var QcloudSms = require("qcloudsms_js");
  // 语音消息应用 SDK AppID
  var appid = 1400352279;  // SDK AppID 以1400开头
  // 语音消息应用 App Key
  var appkey = "2b2030f58d67021c1a766ed7bbe433f5";
  // 需要发送语音消息的手机号码
  // var phoneNumbers = ["13480657523"];
  // 语音模板 ID，需要在语音消息控制台中申请
  var templateId = 601624;  // NOTE: 这里的模板 ID`7839`只是示例，真实的模板 ID 需要在语音消息控制台中申请
  // 实例化 QcloudSms
  var qcloudsms = QcloudSms(appid, appkey);

  var params = ["邓明",'3','888','0,0,3,2','5'];
  var tvsender = qcloudsms.TtsVoiceSender();

  tvsender.send("86", event.phone, templateId, params, 2, "", callback);
  // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
  function callback(err, res, resData) {
    if (err) {
        return {
          err
        }
    } else {
        return {
          resData
        }
    }
  }
  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}