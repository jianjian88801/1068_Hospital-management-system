<template>
  <div>
    <div class="container">
      <div class="login-form" style="backgroundColor:rgba(255,255,255,.5);borderRadius:10px">
        <h1 class="h1" style="color:#000;fontSize:28px;">医院管理系统注册</h1>
		<el-form ref="rgsForm" class="rgs-form" :model="rgsForm" label-width="120px">
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">医生工号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yishenggonghao" class="input" type="text" placeholder="医生工号">
			   </div>
			 </div> -->
			<el-form-item label="医生工号" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.yishenggonghao" autocomplete="off" placeholder="医生工号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">医生姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yishengxingming" class="input" type="text" placeholder="医生姓名">
			   </div>
			 </div> -->
			<el-form-item label="医生姓名" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.yishengxingming" autocomplete="off" placeholder="医生姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">科室</div>
			   <div class="input-container">
			     <input v-model="ruleForm.keshi" class="input" type="text" placeholder="科室">
			   </div>
			 </div> -->
			<el-form-item label="科室" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.keshi" autocomplete="off" placeholder="科室"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">职称</div>
			   <div class="input-container">
			     <input v-model="ruleForm.zhicheng" class="input" type="text" placeholder="职称">
			   </div>
			 </div> -->
			<el-form-item label="职称" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.zhicheng" autocomplete="off" placeholder="职称"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">医龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.yiling" class="input" type="text" placeholder="医龄">
			   </div>
			 </div> -->
			<el-form-item label="医龄" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.yiling" autocomplete="off" placeholder="医龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='yisheng'" class="input-group">
			   <div class="label">联系电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxidianhua" class="input" type="text" placeholder="联系电话">
			   </div>
			 </div> -->
			<el-form-item label="联系电话" class="input" v-if="tableName=='yisheng'">
			  <el-input v-model="ruleForm.lianxidianhua" autocomplete="off" placeholder="联系电话"  />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">护士工号</div>
			   <div class="input-container">
			     <input v-model="ruleForm.hushigonghao" class="input" type="text" placeholder="护士工号">
			   </div>
			 </div> -->
			<el-form-item label="护士工号" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.hushigonghao" autocomplete="off" placeholder="护士工号"  />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">密码</div>
			   <div class="input-container">
			     <input v-model="ruleForm.mima" class="input" type="text" placeholder="密码">
			   </div>
			 </div> -->
			<el-form-item label="密码" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.mima" autocomplete="off" placeholder="密码" type="password"#elsetype="text" />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">护士姓名</div>
			   <div class="input-container">
			     <input v-model="ruleForm.hushixingming" class="input" type="text" placeholder="护士姓名">
			   </div>
			 </div> -->
			<el-form-item label="护士姓名" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.hushixingming" autocomplete="off" placeholder="护士姓名"  />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">科室</div>
			   <div class="input-container">
			     <input v-model="ruleForm.keshi" class="input" type="text" placeholder="科室">
			   </div>
			 </div> -->
			<el-form-item label="科室" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.keshi" autocomplete="off" placeholder="科室"  />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">工龄</div>
			   <div class="input-container">
			     <input v-model="ruleForm.gongling" class="input" type="text" placeholder="工龄">
			   </div>
			 </div> -->
			<el-form-item label="工龄" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.gongling" autocomplete="off" placeholder="工龄"  />
			</el-form-item>
			<!-- <div v-if="tableName=='hushi'" class="input-group">
			   <div class="label">联系电话</div>
			   <div class="input-container">
			     <input v-model="ruleForm.lianxidianhua" class="input" type="text" placeholder="联系电话">
			   </div>
			 </div> -->
			<el-form-item label="联系电话" class="input" v-if="tableName=='hushi'">
			  <el-input v-model="ruleForm.lianxidianhua" autocomplete="off" placeholder="联系电话"  />
			</el-form-item>
			<div style="display: flex;flex-wrap: wrap;width: 100%;justify-content: center;">
				<el-button class="btn" type="primary" @click="login()">注册</el-button>
				<el-button class="btn close" type="primary" @click="close()">取消</el-button>
			</div>
		</el-form>
      </div>
      <!-- <div class="nk-navigation">
        <a href="#">
          <div @click="login()">注册</div>
        </a>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
      },
      tableName:"",
      rules: {}
    };
  },
  mounted(){
    let table = this.$storage.get("loginTable");
    this.tableName = table;
  },
  methods: {
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    close(){
	this.$router.push({ path: "/login" });
    },
    // 注册
    login() {
      if((!this.ruleForm.yishenggonghao) && `yisheng` == this.tableName){
        this.$message.error(`医生工号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `yisheng` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if(`yisheng` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }
      if((!this.ruleForm.hushigonghao) && `hushi` == this.tableName){
        this.$message.error(`护士工号不能为空`);
        return
      }
      if((!this.ruleForm.mima) && `hushi` == this.tableName){
        this.$message.error(`密码不能为空`);
        return
      }
      if((!this.ruleForm.hushixingming) && `hushi` == this.tableName){
        this.$message.error(`护士姓名不能为空`);
        return
      }
      if(`hushi` == this.tableName && this.ruleForm.gongling&&(!this.$validate.isIntNumer(this.ruleForm.gongling))){
        this.$message.error(`工龄应输入整数`);
        return
      }
      if(`hushi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }
      this.$http({
        url: `${this.tableName}/register`,
        method: "post",
        data:this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "注册成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.$router.replace({ path: "/login" });
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked .el-radio__inner {
		border-color: #00c292;
		background: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.el-radio__input.is-checked+.el-radio__label {
		color: #00c292;
	}

	.h1 {
		margin-top: 10px;
	}

	body {
		padding: 0;
		margin: 0;
	}

	// .container {
 //    min-height: 100vh;
 //    text-align: center;
 //    // background-color: #00c292;
 //    padding-top: 20vh;
 //    background-image: url(../assets/img/bg.jpg);
 //    background-size: 100% 100%;
 //    opacity: 0.9;
 //  }

	// .login-form:before {
	// 	vertical-align: middle;
	// 	display: inline-block;
	// }

	// .login-form {
	// 	max-width: 500px;
	// 	padding: 20px 0;
	// 	width: 80%;
	// 	position: relative;
	// 	margin: 0 auto;

	// 	.label {
	// 		min-width: 60px;
	// 	}

	// 	.input-group {
	// 		max-width: 500px;
	// 		padding: 20px 0;
	// 		width: 80%;
	// 		position: relative;
	// 		margin: 0 auto;
	// 		display: flex;
	// 		align-items: center;

	// 		.input-container {
	// 			display: inline-block;
	// 			width: 100%;
	// 			text-align: left;
	// 			margin-left: 10px;
	// 		}

	// 		.icon {
	// 			width: 30px;
	// 			height: 30px;
	// 		}

	// 		.input {
	// 			position: relative;
	// 			z-index: 2;
	// 			float: left;
	// 			width: 100%;
	// 			margin-bottom: 0;
	// 			box-shadow: none;
	// 			border-top: 0px solid #ccc;
	// 			border-left: 0px solid #ccc;
	// 			border-right: 0px solid #ccc;
	// 			border-bottom: 1px solid #ccc;
	// 			padding: 0px;
	// 			resize: none;
	// 			border-radius: 0px;
	// 			display: block;
	// 			width: 100%;
	// 			height: 34px;
	// 			padding: 6px 12px;
	// 			font-size: 14px;
	// 			line-height: 1.42857143;
	// 			color: #555;
	// 			background-color: #fff;
	// 		}

	// 	}
	// }

	.nk-navigation {
		margin-top: 15px;

		a {
			display: inline-block;
			color: #fff;
			background: rgba(255, 255, 255, .2);
			width: 100px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;
		}

		.icon {
			margin-left: 10px;
			width: 30px;
			height: 30px;
		}
	}

	.register-container {
		margin-top: 10px;

		a {
			display: inline-block;
			color: #fff;
			max-width: 500px;
			height: 50px;
			border-radius: 30px;
			text-align: center;
			display: flex;
			align-items: center;
			margin: 0 auto;
			justify-content: center;
			padding: 0 20px;

			div {
				margin-left: 10px;
			}
		}
	}
	
	.container {
		background-image: url("http://codegen.caihongy.cn/20201224/9fbd16b514e046e2a5f455c8f6318103.jpg");
		height: 100vh;
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
	
		.login-form {
			right: 50%;
			top: 50%;
			height: auto;
			transform: translate3d(50%, -50%, 0);
			border-radius: 10px;
			background-color: rgba(255,255,255,.5);
			width: 420px;
			padding: 30px 30px 40px 30px;
			font-size: 14px;
			font-weight: 500;
			
			.h1 {
				margin: 0;
				text-align: center;
				line-height: 54px;
			    font-size: 24px;
			    color: #000;
			}
				
			.rgs-form {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				
				.input {
					width: 100%;
					
					& /deep/ .el-form-item__label {
						line-height: 40px;
						color: 14px;
						font-size: #606266;
					}
					
					& /deep/ .el-input__inner {
						height: 40px;
						color: #606266;
						font-size: 14px;
						border-width: 1px;
						border-style: solid;
						border-color: #606266;
						border-radius: 4px;
						background-color: #fff;
					}
				}
				
				.btn {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #fff;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 4px;
					background-color: #409EFF;
				}

				.close {
					margin: 0 10px;
					width: 88px;
					height: 44px;
					color: #409EFF;
					font-size: 14px;
					border-width: 1px;
					border-style: solid;
					border-color: #409EFF;
					border-radius: 5px;
					background-color: #FFF;
				}

			}
		}
	}
</style>
