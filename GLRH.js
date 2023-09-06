// const fs=require('fs')
// const ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz = require('./afoa/ce_ebwu_yhrj_sjbx_diyc_eysj_zjlz')
// var yxna_1="./afoa/KPLU/ce_ebwu_kplu_zv_yhrj_sjbx.java"
// var yxna_2="./afoa/KPLU/SI_ZTWM_3.java"
// var yxna_3="D:/RSGM/nodejs/UUVO_OUSS/afoa/KPLU/词典360万单词量.txt"
// var uu=String.fromCodePoint(0x78 ,0X30 ,0X38)
// throw uu
// const child_process = require('child_process');
const { spawn } = require('child_process');

const batPath = "D:/RSGM/nodejs/启动工作助手2.bat";

const bat = spawn('cmd.exe', ['/c', batPath]);

bat.stdout.on('data', data => {
  console.log(data.toString());
});

bat.stderr.on('data', data => {
  console.error(data.toString());
});

bat.on('exit', code => {
  console.log(`Child exited with code ${code}`);
});