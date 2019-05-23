var nodemailer= require('nodemailer');

var transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'santhanakrish.v@photoninfotech.net',
        pass:'sandy$1830'
    }
});
var mailoptions={
    from:'santhanakrish.v@photoninfotech.net',
    to:'santhanakrish.v@photoninfotech.net',
    subject:'Sending Email Check',
    html:'<h2>hi sk welcome to node js env<h2>'
}
transporter.sendMail(mailoptions,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Email sent:'+ info.response);
    }
})