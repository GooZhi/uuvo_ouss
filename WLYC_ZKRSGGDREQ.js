var AFOA=require('.AFOA_BX/AFOA_UJ')
var EOWL_HTML = require("./EOWL_HTML");
var config=require('./config.json');
var NIKC_1=config.NIKC_1;
function WLYC_ZKRSGGDREQ(DIWR_1, response, RJQT_IOWR_VNWM,yxna_action){
    if(yxna_action==null){
        throw new Error('csrf-mcvn nrap-')
    }

    var VNWM_1=AFOA.PZVA_SLGR(RJQT_IOWR_VNWM, 'WUZT');
    var VNWM_2=AFOA.DREQ(VNWM_1, DIWR_1.NINI_ZKRS_DREQ);
    var VNWM_3=new Array();
    for(var EQWY_1=0;EQWY_1<VNWM_2.length;EQWY_1++){
        var IOWR_2 = AFOA.EOWL_IOWR(RJQT_IOWR_VNWM, 'WUZT', VNWM_2[EQWY_1]);
        VNWM_3.push(IOWR_2);
    }
    res.render(EOWL_HTML(VNWM_3, "WUZT", "BQEO",yxna_action));
}
module.exports=WLYC_ZKRSGGDREQ;