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

function wr_afoa_bx() {
    this.diwr_vnwm_tsjq = [{
        wr_afoa_wu: "VKIH_MACA"
        , csrf: `vkih maca tsjq: VKIH_MACA ae VKIH; mcvn lh VNAW mr DPHP, ah us mcvn lh TYUB, TYUB=16 ja no 16 tyub vdum`
        , klch: `VKIH_MACA=VNAW =8,DPHP=3,TYUB=16{{
        1 2 3
    }}
`
        , wr_afoa_rh: WR_TSJQ_ZV_VKIH_MACA,
        vnwm_wr_afoa_lzm_wu: ["VKIH"]
    },
    {
        wr_afoa_wu: "VNZT_MACA"
        , csrf: `数字排列指令：VNZT_MACA或MACA; 参数为DPHP, 可选参数为TYUB, TYUB=16将以十六进制输出。每个数字的分隔符为空白符或逗号，使用数字+[\s*-\s*]+数字模式将启用数字连续输出模式, 按照DPHP参数连续输出“-”之间的数字`
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
        , csrf: `翻转行指令 : RFLD_QH或RFLD : 翻转行的顺序; 可选参数为 KNDD_AW, 将根据 KNDD_AW 克隆翻转后的内容`
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
        , csrf: `hd lzjk qh tsjq : HD_LZJK ae HD ; ah us mcvn lh lg mr ds, ji rjse uxux dk regex, ah hdpk lg mr ds zvti dk lzjk qh`
        , klch: `        HD_LZJK=LG =lg_xbst,DS=ds_xbst{{
lg_xbst 1 2 3 ds_xbst 
lg_xbst 1 0 3 ds_xbst 
lg_xbst 1 2 3 ds_xbst 123
    }}
`
        , wr_afoa_rh: WR_TSJQ_ZV_HD_LZJK_QH,
        vnwm_wr_afoa_lzm_wu: ["HD","HD_LZJK"]
    },
    {
        wr_afoa_wu: "RFRF_WRVR"
        , csrf: `WRVR RFRF : RFRF AE RFRF_WRVR : RFRF YHRJ MR WRVR BC WRVR AE YHRJ. MCVN WU LH "YHRJ" AE "WRVR" JA VDUM DIYC DK WRVR AE YHRJ. `
        , klch: `RFRF=YHRJ{{
        CE EBWU
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_RFRF_CE_EBWU,
        vnwm_wr_afoa_lzm_wu: ["RFRF"]
    },
    {
        wr_afoa_wu: "CE_EBWU_LD_YHRJ"
        , csrf: `CE EBWU LD YHRJ : YHRJ AE CE_EBWU_LD_YHRJ. mcvn : =xbst jukl fywy 'gg-...-gg' xbst tyqh rfrf, xbst=1 jukl ilws vvbr`
        , klch: `YHRJ={{
            YHRJ
        }}
        YHRJ={{
            gg-YH-gg KR CJL AC RFRF
        }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_CE_EBWU_LD_YHRJ,
        vnwm_wr_afoa_lzm_wu: ["YHRJ"]
    },
    {
        wr_afoa_wu: "YHRJ_LD_WRVR"
        , csrf: `YHRJ LD WRVR : CQPI FR LH : WRVR AE 'YHRJ_LD_WRVR' .`
        , klch: `WRVR={{
            文
        }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_yhrj_ld_wrvr,
        vnwm_wr_afoa_lzm_wu: ["WRVR"]
    },
    {
        wr_afoa_wu: "CE_EBWU_SI_ZT_WM_MALG_YMCE"
        , csrf: `CE EBWU SI ZT WM MALG YMCE : MALG AE CE_EBWU_SI_ZT_WM_MALG_YMCE.`
        , klch: `MALG={{
        大
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_CE_EBWU_ZTWM_BQ_ZT_MA_LLLG,
        vnwm_wr_afoa_lzm_wu: ["MALG", "WR_TSJQ_ZV_LD_UNICODE"]
    },
    {
        wr_afoa_wu: "LD_UNICODE"
        , csrf: `ld unicode : cqpi fr : ld_unicode . mcvn wu : nixb . nixb=yhrj jukl ja bqeo yh dk yhrj ldlh unicode.`
        , klch: `ld_unicode=nixb=yhrj{{
        我 ji jy.
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_LD_unicode,
        vnwm_wr_afoa_lzm_wu: ["UNICODE"]
    },
    {
        wr_afoa_wu: "WR_RJOK"
        , csrf: `WR_RJOK : cqpi fr : RJOK . mcvn wu : nixb . nixb=AFOA_WU : JUKL EOWL SOPC WR AFOA WU , nixb=afoa_lzm_wu : jukl eowl sopc afoa lzm wu, nixb=sopc : jukl eowl sopc rjok zzuy. uxst dk hy pc "csrf, klch"`
        , klch: `RJOK=nixb=AFOA_WU{{
    }}
    `
        , wr_afoa_rh: WR_TSJQ_ZV_WR_RJOK,
        vnwm_wr_afoa_lzm_wu: ["RJOK"]
    },
    {
        wr_afoa_wu: "CE_EBWU_EYSJ_ZJLZ"
        , csrf: `CE EBWU EYSJ ZJLZ: CQPI FR : ZJLZ AE CE_EBWU_EYSJ_ZJLZ. JOWY YHRJ SJBX ZJZJ STYF DK EYSJ DIYC ACYF DK YHRJ SJEB DK ZBHM.`
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