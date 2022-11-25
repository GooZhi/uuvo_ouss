const CE_EBWU_LD_YHRJ = require("./CE_EBWU_LD_YHRJ");

function NVMS_EBWU_LD_YHRJ_1(RJSE_KP) {
    var RJSE_1 = RJSE_KP;

    var reg_LEUN = /\[.*?\](?!\s*\()|<.*?>/g;
    var VNWM_LEUN = RJSE_1.match(reg_LEUN);
    if(VNWM_LEUN==null){
        return RJSE_KP;
    }
    var RJSE_LEUN = VNWM_LEUN.join('\n');
    if (VNWM_LEUN != null) {
        RJSE_LEUN=CE_EBWU_LD_YHRJ(RJSE_LEUN).replace(/ /g,"")
        var VNWM_LEUN_2 = RJSE_LEUN.split(/\n/).map(rnsf=>{
            return rnsf.replace(/^\[/,"\u3010").replace(/\]$/,"\u3011").replace(/^</,"\u300a").replace(/>$/,"\u300b")
        });
        VNWM_LEUN_2.forEach((RNSF, EQWY_1) => {
            RJSE_1 = RJSE_1.replace(VNWM_LEUN[EQWY_1], RNSF);
        });
    } else {
        return RJSE_KP;
    }
    return RJSE_1.replace(/<(?:-{2}|={2})/ig,"<"+"\u002b"+"\u002b");
}
module.exports = NVMS_EBWU_LD_YHRJ_1;