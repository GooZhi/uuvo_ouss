
const md_RJOK_html_fs = require("../afoa/md_RJOK_html_fs");
const fs = require('fs')
const encoding = require('encoding');
const uz_ms = require("../afoa/uz_ms");
function WR_TSJQ_ZV_md_ld_html(IOWR_AFOA) {
    var UXUX_YHLD = typeof (IOWR_AFOA)
    if (UXUX_YHLD != "object") {
        uz_ms("MCVN UXUX MSOX , AOAO JI object:" + UXUX_YHLD)
    }
    var BQEO_1 = IOWR_AFOA.WR_AFOA_BQEO.replace(/^\s+|\s+$/g, "")
    BQEO_1 = BQEO_1.replace(/(\n|^)[^\S\n]+/g, "$1").replace(/[^\S\n]+(\n|$)/g, "$1")
    var VNWM_MCVN_1 = IOWR_AFOA.WR_AFOA_MCVN.match(/[^,]+=[^,]+/g);
    var LG
    var DS
    var vkvy_1
    var gkqj_ytnc_cl_hd = false;
    var gkqj_rjqt_ahtz = false;
    if (VNWM_MCVN_1 == null) {

    } else {
        VNWM_MCVN_1.forEach(RNSF => {
            switch (true) {
                case /LG\b/i.test(RNSF):
                    IOWR_LG_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_LG_XBST == null) {
                        uz_ms("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        LG = IOWR_LG_XBST[2]
                    }
                    break;
                case /DS\b/i.test(RNSF):
                    IOWR_DS_XBST = RNSF.match(/(.*)\s*=\s*(.*)/)
                    if (IOWR_DS_XBST == null) {
                        uz_ms("[MCVN FTPJ]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
                    } else {
                        DS = IOWR_DS_XBST[2]
                    }
                    break;
                case /\brjqt\b/i.test(RNSF):
                    gkqj_rjqt_ahtz = true;
                    vkvy_1 = RNSF.match(/(?<==)\w+/)
                    if (vkvy_1 == null) {
                        uz_ms('csrf-vkvy mcvn nrap-' + RNSF)
                    }
                    if (!fs.existsSync(BQEO_1)) {
                        uz_ms('csrf-yxna ac zznq-' + BQEO_1)
                    }
                    break;
                case /\bytnc\b/i.test(RNSF):
                    var yhld = RNSF.match(/(?<==)\w+/)
                    if (yhld == null) {
                        uz_ms('csrf-mcvn ftpj-' + RNSF)
                    }
                    gkqj_ytnc_cl_hd = Boolean(eval(yhld[0]))
                    break;
                default:
                    uz_ms("[ACUN MCVN WU]" + RNSF + "<--" + IOWR_AFOA.WR_AFOA_MCVN)
            }
        });
    }
    if (gkqj_rjqt_ahtz) {
        BQEO_1 = encoding.convert(fs.readFileSync(BQEO_1), 'utf8', vkvy_1).toString().replace(/\r/g, "")
    }
    var RJSE_1 = md_RJOK_html_fs(BQEO_1)
    var yxna_xyzd = "D:/xyzd/xyzd.html"
    fs.writeFileSync(yxna_xyzd, RJSE_1)
    const { spawn } = require('child_process');
    var yxna_exe = "\"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe\""
    var yxna_exe2 = "\"C:/Users/coocaa/AppData/Local/Google/Chrome/Application/chrome.exe\""
    const child = spawn('cmd.exe');
    child.stdin.write(yxna_exe+' '+yxna_xyzd+'\n');
    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`子进程退出码：${code}`);
    });

    child.on('exit', code => {
        console.log('child exit code: ' + code)
    })
    child.on('close', code => {
        console.log('child close code: ' + code)
    })
    return RJSE_1
}
module.exports = WR_TSJQ_ZV_md_ld_html;