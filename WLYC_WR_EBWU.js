
var WR_EBWU =require('./WR_EBWU/WR_EBWU');
var encoding=require('encoding');
var {exec}=require('child_process');
function WLYC_WR_EBWU(req,res){
    var RJSE_KP=req.body.VDZV_1
    var JTYP_1
        JTYP_1=WR_EBWU(RJSE_KP)        
    res.render('WR_EBWU', {JTYP_1,RJSE_KP});
    exec('clip').stdin.end(encoding.convert(JTYP_1,'gbk','utf8'))
}
module.exports=WLYC_WR_EBWU;