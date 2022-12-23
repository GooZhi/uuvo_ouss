var UKYP_2=require('./UKYP_2')
var fs1=require('fs')
function WLYC_UKYP(req, res, diwr_mcvn){
    if(diwr_mcvn.RJQT_DIWR_VNWM==undefined){
        throw new Error("CSRF-WLYC_UKYP:NRAP MCVN-");
    }
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    diwr_mcvn.ZKRS_KP=req.body.ZKRS_1
    diwr_mcvn.BQEO_KP=req.body.BQEO_0_1
    res.write(UKYP_2(diwr_mcvn));
    res.end();
}
module.exports=WLYC_UKYP;