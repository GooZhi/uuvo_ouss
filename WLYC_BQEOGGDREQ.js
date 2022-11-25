var AFOA=require('./AFOA_BX/AFOA_UJ')
var EOWL_HTML = require("./EOWL_HTML");
function WLYC_ZKRSGGDREQ(DIWR_1, response, RJQT_IOWR_VNWM){
    var VNWM_3=AFOA.DREQ_2(RJQT_IOWR_VNWM, 'BQEO',DIWR_1.NINI_BQEO_DREQ);
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    response.write(EOWL_HTML(VNWM_3, "WUZT", "BQEO"));
    response.end();
}
module.exports=WLYC_ZKRSGGDREQ;