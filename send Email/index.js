// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const nodemailer = require("nodemailer");  
    let sendEmail = nodemailer.createTransport({    
       host: "smtp.163.com", //SMTP服务器地址    
       port: 465, //端口号，通常为465，587，994，不同的邮件客户端端口号可能不一样    
       secure: true, //如果端口是465，就为true;如果是其它就填false    
       auth: {      
          user: "18319312815@163.com",  //邮箱账号，填写已开启SMTP服务的邮箱地址即可      
          pass: "JHLOLYXFBIEHEXAB"   //邮箱密码，不同的邮件系统可能机制不一样，QQ邮箱和网易邮箱为邮箱授权码    
        }  
         });   
       let message = {   
          from: '18319312815@163.com',   //填写发件邮箱地址   
          to: 'xiaoxie53517230@qq.com',  //填写收件方的邮箱地址 
          subject: '这是我发送的第一封邮件',    
          text: 'Hello world?',  //text纯文字  
          html: '<b>Hello world?</b>', //html代码  
    };  
       let res = await sendEmail.sendMail(message);
       return res
}
// 调用方式
// wx.cloud.init()
// wx.cloud.callFunction({
//     name:"email",
// }).then(res => {
//     console.log("邮件发送成功",res)
// }).catch(err => {
//     console.log("邮件发送失败",err)
// })