const uz_ms = require('../afoa/uz_ms');

function WR_TSJQ_ZV_WRVR_FKKC_EY_ZT(DIWR_AFOA) {
    var UXUX_YHLD = typeof (DIWR_AFOA)
    if (UXUX_YHLD != "object") {
        throw new Error("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = DIWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "");
    var VNWM_MCVN_1 = DIWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    if (VNWM_MCVN_1 == null) {
        // throw new Error("MCVN NRAP")
    } else {
        var diwr_nixb
        var EBWU
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /\bNIXB\b/i.test(RNSF):
                    diwr_nixb = RNSF.match(/(?<==)\w+/)
                    if (diwr_nixb == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        diwr_nixb = (diwr_nixb[0])
                    }
                    break;
                case /\bEBWU\b/i.test(RNSF):
                    var DIWR_EBWU = RNSF.match(/(?<==)\w+/)
                    if (DIWR_EBWU == null) {
                        throw new Error("[MCVN FTPJ]" + RNSF + "<--" + DIWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        EBWU = DIWR_EBWU[0]
                    }
                    break;
                default:
                    throw new Error("[ACUN MCVN WU]" + RNSF + "<--" + AFOA_UJ.WR_AFOA_MCVN)
            }
        });
    }
    const { spawn } = require('child_process');
    const child = spawn('node', ['wrvr_fkkc.js'], {
        cwd: __dirname,
        detached: true,
        stdio: 'ignore',
        shell:true
    });

    child.on('exit', code => {
        console.log(`vxn tyrs crum, crum dyvy ${code}`);
    });

    child.on('error', err => {
        console.error(`vxn tyrs msox : ${err}`);
    });
    return "Rt nq cmd rzjq lp yh fkkc."
}
module.exports = WR_TSJQ_ZV_WRVR_FKKC_EY_ZT