
function vdzv(zkrs_kp, atvn_vdzv_ud_zhqh) {
    if (typeof (atvn_vdzv_ud_zhqh) != "function") {
        throw new Error('csrf-zf aoao pr zvm wlba atvn-')
    }
    const readline = require('readline');
    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl1.question(zkrs_kp, function (answer) {
        rl1.close();
        atvn_vdzv_ud_zhqh(answer)
    });

}
module.exports = vdzv;