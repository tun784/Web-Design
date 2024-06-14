vnTRUST.customer = {
	focusPass:{
		focus:function(obj){
			var p = jQuery(obj).parent();
			jQuery('#login-password', p).css({width: "90px"}).focus().removeClass('hidden');
			jQuery('#password_txt', p).css({width: "0px"}).addClass('hidden');
			$("#password").focus();
		},
		blur:function(obj){
			if(obj.value == ''){
				var p = jQuery(obj).parent();
				jQuery('#login-password', p).css({width: "0px"}).addClass('hidden');
				jQuery('#password_txt', p).css({width: "90px"}).removeClass('hidden');
			}
		}
	},	
	logout:function(){
		
		$.alerts.overlayColor = "#000000" ;
		$.alerts.overlayOpacity = "0.8" ;
		jConfirm('Bạn có muốn thoát khỏi hệ thống không ?', 'Xác nhận', function(r) {
			if (r){
				vnTRUST.ajax_popup('do=ajax_logout',"POST",{},
				function (j) {
					location.reload();
				});			
			}
		});
		
	  return false;
	},	 
	 
	loginHeader: function(){
		vnTRUST.customer.login.submit('login-email','login-password','login-remember',false);
		return false;
	},
	loginPopup: function(){
		vnTRUST.customer.login.submit('login_user','login_pass','save_login',true);
		return false;
	},
	login : {
		show:function(ref){
			if(ref==undefined) ref = '' ;
			vnTRUST.show_overlay_popup('cunghuong-login', 'Đăng nhập',
			vnTRUST.customer.login.theme.form(ref , 'cunghuong-login', 'Đăng nhập'),
			{
				background: {
					'background-color' : 'transparent'
				},
				border: {
					'background-color' : 'transparent',
					'padding' : '0px'
				},
				title: {
					'display' : 'none'
				},
				content: {
					'padding' : '0px',
					'width' : '400px'
				},
				pos_type: 'fixed',
				position : 'center-center'
			});
		},
		cancel:function(){vnTRUST.hide_overlay_popup('cunghuong-login')},
		valid:function(id_user, id_pass , popup){
			var juser = '#'+id_user;
			var jpass = '#'+id_pass;
			var juser = vnTRUST.util_trim(jQuery(juser).val());
 			if(juser == ''  ){
				var $msg = 'Chưa nhập tên đăng nhập !';
				if(!popup){
					vnTRUST.show_popup_message($msg, "Đăng nhập thất bại", -1);
				}
				else{
					vnTRUST.error.set(juser, $msg, 230, '.login_form');
				}
				return false;
			}else{
				vnTRUST.error.close(juser, '.login_form');
			}
			
			var pass = vnTRUST.util_trim(jQuery(jpass).val()); 
			if(pass == ''){
				var $msg = 'Chưa nhập mật khẩu!';
				if(!popup){
					vnTRUST.show_popup_message($msg, "Đăng nhập thất bại", -1);
				}
				else{
					vnTRUST.error.set(jpass, $msg, 230, '.login_form');
				}
				return false;
			}else if(pass.length < 5){
				var $msg = 'Mật khẩu tối thiểu phải có 5 kí tự!';
				if(!popup){
					vnTRUST.show_popup_message($msg, "Đăng nhập thất bại", -1);
				}
				else{
					vnTRUST.error.set(jpass, $msg, 230, '.login_form');
				}
				return false;
			}
			return true;
		},
		submit: function(id_user, id_pass , id_save, popup){
 
			if(vnTRUST.customer.login.valid(id_user,id_pass,popup)){
				var juser = '#'+id_user;
				var jpass = '#'+id_pass;
				var save = vnTRUST.get_ele(id_save);
				var cookie = save.checked ? 'on' : 'off';
				var post = {
					username: vnTRUST.util_trim(jQuery(juser).val()),
					pass: vnTRUST.util_trim(jQuery(jpass).val()),
					save: cookie
				};
				vnTRUST.ajax_popup('do=popup_login','POST',post,
					function(j){
						if (j.ok == 1 ) {
							var hRef = $("#hRef").val();
							if(hRef){
								location.href=hRef;
							}else{
								location.reload();	
							} 
						  
						} else {
							
							if(!popup){
								vnTRUST.show_overlay_popup('sys-alert', '',
								vnTRUST.popupSite('sys-alert', 'Hệ thống', vnTRUST.join
														('<div class="content" style="padding:20px">')
															('<div style="color:red"><b>Đăng nhập không thành công !!!</b></div>')
															('<div class="f12 mTop10"><b><u>Nguyên nhân</u>:</b> '+j.mess+'</div>')
														('</div>')()),
								{
									background: {'background-color' : 'transparent'},
									border: {
										'background-color' : 'transparent',
										'padding' : '0px'
									},
									title: {'display' : 'none'},
									content: {
										'padding' : '0px',
										'width' : '400px'
									}
								});
							}
							else{
								vnTRUST.error.set('', j.mess, 340, '.login_form');
							} 
						}
					});
			}
		},
		theme:{
			form:function(ref,id, title, close, opt){
				return vnTRUST.popupSite(id, title, vnTRUST.join
					('<form onsubmit="return vnTRUST.customer.loginPopup('+ref+');" method="post" id="customer_login_form">')
						('<div class="content login_form" style="padding:1px 0 10px">')
							('<div id="divError"></div>')
							('<div class="mTop10">')
								('<table cellpadding="2" cellspacing="5">')
									('<tr class="reg_collapse">')
										('<td align="right" width="140">Tên đăng nhập:</td>')
										('<td width="200"><input type="text" id="login_user" name="username" class="textfiled" /></td>')
									('</tr>')
									('<tr class="mTop10 reg_collapse">')
										('<td align="right">Mật khẩu:</td>')
										('<td><input type="password" id="login_pass" name="pass" class="textfiled" /></td>')
									('</tr>')
									('<tr>')
										('<td></td>')
										('<td align="left">')
											('<input type="checkbox" id="save_login" />')
											('<span class="login_oke" onclick="vnTRUST.customer.login.theme.check()" style="color:#006997"> Ghi nhớ  </span> | <a href="'+ROOT+'member/register.html" style="color:#006997" >Đăng ký mới</a>')
										('</td>')
									('</tr>')
								('</table>')
							('</div>')
							('<div class="mTop10">')
								('<div style="width:100px;margin:0 auto">')									 
									('<input  id="hRef" name="hRef" type="hidden" value="'+ref+'" />') 									
									('<button  id="btnLogin" name="btnLogin" type="button" class="btn" onclick="vnTRUST.customer.loginPopup()" value="Đăng nhập" ><span >Đăng nhập</span></button>') 
									('<input type="submit" class="hidden" value="" onclick="vnTRUST.customer.loginPopup();">') 
									('<div class="clear"></div>')
								('</div>')
							('</div>')
						('</div>')
					('</form>')(), close, opt
				);
			},
			check:function(){
				var c = vnTRUST.get_ele('save_login');
				if(c){
					c.checked = !c.checked
				}
			}
		}
	}
			 
};
