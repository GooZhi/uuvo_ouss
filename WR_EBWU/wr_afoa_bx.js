var WR_TSJQ_ZV_VKIH_MACA = require('./WR_TSJQ_ZV_VKIH_MACA')
var WR_TSJQ_ZV_CE_EBWU_LD_YHRJ = require('./WR_TSJQ_ZV_CE_EBWU_LD_YHRJ')
var WR_TSJQ_ZV_yhrj_ld_wrvr = require('./WR_TSJQ_ZV_yhrj_ld_wrvr')
var WR_TSJQ_ZV_VNZT_MACA = require('./WR_TSJQ_ZV_VNZT_MACA')
var WR_TSJQ_ZV_HD_LZJK_QH = require('./WR_TSJQ_ZV_HD_LZJK_QH')
var WR_TSJQ_ZV_RFLD_QH = require('./WR_TSJQ_ZV_RFLD_QH')
var WR_TSJQ_ZV_RFRF_CE_EBWU = require('./WR_TSJQ_ZV_RFRF_CE_EBWU')
var WR_TSJQ_ZV_LD_unicode = require('./WR_TSJQ_ZV_LD_unicode')
var WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG = require('./WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG')
var WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ = require('./WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ')
var WR_TSJQ_ZV_WR_RJOK=require('./WR_TSJQ_ZV_WR_RJOK')
const WR_TSJQ_ZV_LD_ASCII = require('./WR_TSJQ_ZV_LD_ASCII')

function wr_afoa_bx() {
    this.diwr_vnwm_tsjq = [{
        wr_afoa_wu: "VKIH_MACA"
        , csrf: `vkih maca tsjq: mcvn lh md-VNAW-md mr md-DPHP-md, ah us mcvn lh md-TYUB-md, md-TYUB=16-md ja no 16 tyub vdum`
        , klch: `VKIH_MACA=VNAW =8,DPHP=3,TYUB=16{{
        1 2 3
    }}
`
        , wr_afoa_rh: WR_TSJQ_ZV_VKIH_MACA,
        vnwm_wr_afoa_lzm_wu: ["VKIH"]
    },
    {
        wr_afoa_wu: "VNZT_MACA"
        , csrf: `vnk ztk mak cak tsn jqm： mcl vnk lhk md-DPHP-md, ahk usk mcl vnk lhk md-TYUB-md, md-TYUB=16-md jak nok cnk uck tyk ubm vdk umk。lik nhk vnk ztk dkk fdk qek frk lhk vvk uak frk aek boo ihk，rvk dbk vnk ztk+[\s*-\s*]+vnk ztk hqm tzl jak drn dbk vnk ztk ytm nck vdk umk hqm tzl, zsk ywl DPHP mcl vnk ytm nck vdk umk“-”zvk tik dkk vnk ztk`
        , klch: `VNZT_MACA=DPHP=3,TYUB=16{{
101-105
110
112,113 114
}}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_VNZT_MACA,
        vnwm_wr_afoa_lzm_wu: ["MACA"]
    },
    {
        wr_afoa_wu: "RFLD_QH"
        , csrf: `rfk ldk qhk tsn jqm : rfk ldk qhk dkk wum gmk; ahk usk mcl vnk lhk KNDD_AW, jak fyn wym KNDD_AW knn ddo rfk ldk udk dkk bqk eom`
        , klch: `RFLD={{
        1
        2
        3
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_RFLD_QH,
        vnwm_wr_afoa_lzm_wu: ["RFLD"]
    },
    {
        wr_afoa_wu: "HD_LZJK_QH"
        , csrf: `hd lzjk qh tsjq :  ah us mcvn lh MD-lg-MD mr MD-ds-MD, ji rjse uxux dk regex, ah hdpk MD-lg-MD mr MD-ds-MD zvti dk lzjk qh;'md-rjqt=gb2312-md'jukl ja fywy vkvy md-gb2312-md rjvt nixb bqeo tyqh hdpk. `
        , klch: `HD_LZJK=LG =lg_xbst,DS=ds_xbst{{
lg_xbst 1 2 3 ds_xbst 
lg_xbst 1 0 3 ds_xbst 
lg_xbst 1 2 3 ds_xbst 123
    }}
    hd=rjqt=gb2312{{
        d:/test/nvrj.txt
    }}
`
        , wr_afoa_rh: WR_TSJQ_ZV_HD_LZJK_QH,
        vnwm_wr_afoa_lzm_wu: ["HD","HD_LZJK"]
    },
    {
        wr_afoa_wu: "RFRF_WRVR"
        , csrf: `WRVR RFRF : RFRF YHRJ MR WRVR BC WRVR AE YHRJ. MCVN WU LH "YHRJ" AE "WRVR" JA VDUM DIYC DK WRVR AE YHRJ. `
        , klch: `RFRF=YHRJ{{
        WRVR
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_RFRF_CE_EBWU,
        vnwm_wr_afoa_lzm_wu: ["RFRF"]
    },
    {
        wr_afoa_wu: "WRVR_LD_YHRJ"
        , csrf: `WRVR LD YHRJ : mcvn : =xbst jukl fywy 'MD-gg-...-gg-MD' xbst tyqh rfrf, xbst=1 jukl ilws vvbr`
        , klch:
`YHRJ={{
YHRJ
}}
YHRJ=XBST{{
gg-YH-gg KR CJL AC RFRF
}}
YHRJ=XBST=1{{
gg-RFRF RFRF-gg
}}
YHRJ=XBST{{
gg-RFRF RFRF-gg
}}
`        , wr_afoa_rh: WR_TSJQ_ZV_CE_EBWU_LD_YHRJ,
        vnwm_wr_afoa_lzm_wu: ["YHRJ"]
    },
    {
        wr_afoa_wu: "YHRJ_LD_WRVR"
        , csrf: `YHRJ LD WRVR : CQPI FR LH : uo co zqjp db wrvr ymrg yhrj dk trig , sr vdzv mcvn: md-'rg'-md om qh. `
        , klch: `WRVR={{
            文
        }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_yhrj_ld_wrvr,
        vnwm_wr_afoa_lzm_wu: ["WRVR"]
    },
    {
        wr_afoa_wu: "CE_EBWU_SI_ZT_WM_MALG_YMCE"
        , csrf: `WRVR SI ZT WM MALG YMCE : `
        , klch: `MALG={{
        大
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG,
        vnwm_wr_afoa_lzm_wu: ["MALG", "WR_TSJQ_ZV_LD_UNICODE"]
    },
    {
        wr_afoa_wu: "LD_UNICODE"
        , csrf: `ld unicode : cqpi fr : ld_unicode . mcvn wu : nixb . nixb=yhrj jukl ja bqeo yh dk yhrj ld lh unicode.`
        , klch: `ld_unicode=nixb=yhrj{{
        我 ji jy.
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_LD_unicode,
        vnwm_wr_afoa_lzm_wu: ["UNICODE"]
    },
    {
        wr_afoa_wu: "LD_ASCII"
        , csrf: `ld ASCII : cqpi fr : mcvn wu : MD-RJQT, RJQT=UTF8-MD jukl no vkvy utf8 brtz rjvt tszn dk vnzt rjqt . vdzv bqeo : vnzt, ja fywy vdzv dk vnzt ld lh ASCII. Vnzt zvti db ft rjzt qeuu ay ah. Uo nq rjqt hqtz tt sr fj oan vdzv rjqt yxna.`
        , klch: `asc={{
        0x30 0x31 0x33 0x34
    }}
    asc=rjqt=utf8{{
        d:/xyzd/test_221127.java
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_LD_ASCII,
        vnwm_wr_afoa_lzm_wu: ["ASCII","ASC"]
    },
    {
        wr_afoa_wu: "WR_RJOK"
        , csrf: `WR_RJOK : mcvn wu : MD-nixb-MD . MD-nixb=AFOA_WU-MD : JUKL EOWL SOPC MD-WR-MD AFOA WU , nixb=afoa_lzm_wu : jukl eowl sopc afoa lzm wu, nixb=sopc : jukl eowl sopc rjok zzuy. uxst dk hy pc "csrf, klch"`
        , klch: `RJOK=nixb=AFOA_WU{{
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_WR_RJOK,
        vnwm_wr_afoa_lzm_wu: ["RJOK"]
    },
    {
        wr_afoa_wu: "CE_EBWU_EYSJ_ZJLZ"
        , csrf: `WRVR EYSJ ZJLZ: CQPI FR : JOWY YHRJ SJBX ZJZJ STYF DK EYSJ DIYC ACYF DK YHRJ SJEB DK ZBHM.`
        , klch: `CE_EBWU_EYSJ_ZJLZ={{
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_CE_EBWU_EYSJ_ZJLZ,
        vnwm_wr_afoa_lzm_wu: ["ZJLZ"]
    }]
    this.zjzj_lzjk_wu = function () {
        var rj_wuzt_slgr = this.diwr_vnwm_tsjq.map(rn1 => {
            return rn1.wr_afoa_wu + "," + rn1.vnwm_wr_afoa_lzm_wu.join(',')
        }).join('\n')
        this.diwr_vnwm_tsjq.forEach((rn2) => {
            var vnwm_yhld = rj_wuzt_slgr.match(new RegExp("\\b(?:" + rn2.wr_afoa_wu + "|" + rn2.vnwm_wr_afoa_lzm_wu.join("|") + ")\\b", "ig"))
            if (vnwm_yhld.length > rn2.vnwm_wr_afoa_lzm_wu.length + 1) {
                throw new Error('csrf-wr_afoa_wu ae vnwm_wr_afoa_lzm_wu lzjk-' + rn2.wr_afoa_wu + "," + rn2.vnwm_wr_afoa_lzm_wu.join(','))
            } else {

            }
        })
        return "csrf-hmpc msox-"
    }
    this.zjzj_lzjk_wu()
}
module.exports=wr_afoa_bx;