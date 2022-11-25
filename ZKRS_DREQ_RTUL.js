var AFOA=require('./AFOA_BX/AFOA_UJ')
var EOWL_HTML = require("./EOWL_HTML");
function WLYC_ZKRSGGDREQ(req, res, RJQT_DIWR_VNWM){
    var DIWR_1=req.body
    var VNWM_1=AFOA.PZVA_SLGR(RJQT_DIWR_VNWM, 'WUZT');
    var VNWM_2=AFOA.DREQ(VNWM_1, DIWR_1.NINI_ZKRS_DREQ);
    var VNWM_3=new Array();
    for(var EQWY_1=0;EQWY_1<VNWM_2.length;EQWY_1++){
        var IOWR_2 = AFOA.EOWL_IOWR(RJQT_DIWR_VNWM, 'WUZT', VNWM_2[EQWY_1]);
        VNWM_3.push(IOWR_2);
    }
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    res.write(EOWL_HTML(VNWM_3, "WUZT", "BQEO"));
    res.end()
}
module.exports=WLYC_ZKRSGGDREQ;