
var WR_EBWU =require('./WR_EBWU/WR_EBWU');
var encoding=require('encoding');
var {exec}=require('child_process');
function WLYC_WR_EBWU(req,res){
    var RJSE_KP=req.body.VDZV_1
    var rj_jtyj
        rj_jtyj=WR_EBWU(RJSE_KP)   
        res.render('WR_EBWU', {rj_jtyj,RJSE_KP});
    exec('clip').stdin.end(encoding.convert(rj_jtyj,'gbk','utf8'))
}
module.exports=WLYC_WR_EBWU;