yxna1="/storage/emulated/0/ljh/输入法/SI_ZTWM_3.java"
yxna2="/storage/emulated/0/ljh/输入法/SI_ZTWM_3_ma_lllg.java"
rjse_ztwm_kp=files.read(yxna1)
rjse_1=rjse_ztwm_kp
var vnwm1=rjse_1.split(/\n/)
var bqeo1= rawInput("请输入排头(如:大小你我)，输入的每个字将排在所属字组的前头");
	if(bqeo1==null){//
		toast("拜拜");
		exit();
	}//
var vnwm_3=bqeo1.split("")
vnwm_3.forEach((rnsf_2)=>{
	rjse_1=rjse_1.replace(new RegExp("(.*)("+rnsf_2+")","g"),"$2$1")
})
	files.write(yxna2,rjse_ztwm_kp)
	files.write(yxna1,rjse_1)
	toast("ok")