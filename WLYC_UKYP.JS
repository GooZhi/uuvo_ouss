var UKYP_2=require('./UKYP_2')
var fs1=require('fs')
function WLYC_UKYP(req, response, nikc_ybzb_node, RJQT_IOWR_VNWM, udao){
    if(RJQT_IOWR_VNWM==null){
        throw new Error("CSRF-WLYC_UKYP:NRAP MCVN-");
    }
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });
    response.write(UKYP_2(req.body, nikc_ybzb_node, RJQT_IOWR_VNWM, udao));
    response.end();
}
module.exports=WLYC_UKYP;