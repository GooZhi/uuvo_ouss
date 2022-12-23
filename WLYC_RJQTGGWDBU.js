var AFOA=require('./AFOA_BX/AFOA_UJ');
var fs1=require('fs')
// var RJQT_IOWR_VNWM = AFOA.NIKC_NINI_RJVT(NIKC_1, 'utf8');//获取项目集合的对象.
function WLYC_RJQTGGWDBU(DIWR_1, response, NIKC_1,RJQT_IOWR_VNWM,vkvy){
    if(vkvy==null){
        vkvy="utf8"
    }
    if(NIKC_1==undefined){
        throw new Error('csrf-NIKC_1 LH undefined-')
    }
    if(RJQT_IOWR_VNWM==null){
        console.log("WLYC_RJQTGGWDBU: 缺少参数");
        return;
    }
    var RJSE_1=AFOA.AG_LD_AR(DIWR_1.TSJQ_3);
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    });

    switch(RJSE_1){
        case "" :
            response.write("你需要输入指令");
            response.end();
        break;
        case 'HD':
            if(fs1.existsSync(NIKC_1+DIWR_1.ZKRS_1)){
                fs1.unlinkSync(NIKC_1+DIWR_1.ZKRS_1);
                AFOA.HD_IOWR(RJQT_IOWR_VNWM, "WUZT", DIWR_1.ZKRS_1);
                response.write("删除完毕");
            }
            else{
                response.write('文件不存在或已经删除');
            }
            response.end();          
        break;
        case 'QIGGBQEO':
            AFOA.VDZV(NIKC_1+DIWR_1.ZKRS_1, DIWR_1.BQEO_0_1, vkvy);
            var IOWR_2 = AFOA.EOWL_IOWR(RJQT_IOWR_VNWM, "WUZT", DIWR_1.ZKRS_1);
            IOWR_2.BQEO=DIWR_1.BQEO_0_1;
        response.write("内容修改完成");
        response.end();
        break;
        case 'QIGGZKRS':
            fs1.renameSync(NIKC_1+DIWR_1.ZKRS_1,NIKC_1+DIWR_1.ZKRS_2);
            var IOWR_2 = AFOA.EOWL_IOWR(RJQT_IOWR_VNWM, "WUZT", DIWR_1.ZKRS_1);
            IOWR_2.WUZT=DIWR_1.ZKRS_2;
        response.write("标题修改完成");
        response.end();
        break;
            default:
    response.write("你输入了未定义的指令");
    response.end();          
    }
}
module.exports=WLYC_RJQTGGWDBU;