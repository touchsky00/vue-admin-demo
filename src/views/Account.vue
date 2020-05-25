<template>
	<div class="table-warpper">
		<!-- 表格展示 -->
		<div class="block-content">
			<!-- 表格头部 -->
			<div class="table-header-warpper">
				<div class="table-title">用户列表</div>
				<div class="table-header-right">
					<button class="operate-btn-primary" style="margin-right:10px;" @click="toUploadExcel">上传excel</button>
					<button class="operate-btn-primary" @click="addVisableDialogShow">添加用户</button>
				</div>
			</div>
			<!-- 表格描述 -->
			<div class="table-desc">
				<span>1.可添加、删除用户</span>
			</div>
			<!-- 表格内容 -->
			<div class="table-content">
				<el-table
					:data="userList"
					size="mini"
					:header-cell-style="{color:'#333333',fontSize:'13px',fontWeight:'500'}"
					:cell-style="{color:'#575757',fontSize:'13px',fontWeight:'400'}"
					@cell-click="expandChange"
					:height="tableHeight"
					ref="tableContent"
				>
					<!-- 下拉展示内容 -->
					<el-table-column type="expand">
						<template slot-scope="props">
							<div class="expland-container">
								<div class="expland-wrapper" v-for="(item,index) in explandList" :key="index">
									<div class="expland-title">{{item.label}}：</div>
									<div class="expland-desc">
										<div class="expland-desc">{{props.row[item.prop]}}</div>
									</div>
								</div>
							</div>
						</template>
					</el-table-column>
					<!-- 表格内容 -->
					<el-table-column
						v-for="(item,index) in tableNav"
						:key="index"
						align="center"
						:prop="item.prop"
						:label="item.label"
						show-overflow-tooltip
					/>
					<!-- 表格操作 -->
					<el-table-column align="center" prop="operation" label="操作" width="100%">
						<template slot-scope="scope">
							<button @click="editUserData(scope)" class="operate-btn-primary" style="margin-right:2px;">编辑</button>
							<button class="operate-btn-danger">移除</button>
						</template>
					</el-table-column>
				</el-table>

				<!-- 表格页码 -->
				<el-pagination
					background
					style="margin-top:20px;"
					layout="prev, pager, next"
					:total="listTotalcount"
					:page-size="10"
					@current-change="currentChange"
				></el-pagination>
			</div>
		</div>
		<my-dialog
			:title="dialogTitle"
			:content="dialogContent"
			:visable="isDialogVisable"
			@confirm="getRulesForm"
			@cancel="isDialogVisable = false"
		/>
	</div>
</template>


<script>
export default {
	data() {
		return {
			listTotalcount: 30, //表单总条数
			pageSize: 10, //每一页表单数
			pageNo: 1, //当前页
			tableHeight: window.innerHeight - 280, // 表格高度
			//表头导航
			tableNav: [
				{ prop: "name", label: "姓名" },
				{ prop: "gender", label: "性别" },
				{ prop: "birthtime", label: "出生日期" },
				{ prop: "birthplace", label: "出生地" },
				{ prop: "career", label: "职业" },
				{ prop: "phone", label: "手机号码" }
			],
			//表格数据
			userList: [
				{
					id: 1,
					mail: "312312314@we.com",
					name: "张山张山张山张山张山张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				},
				{
					id: 2,
					mail: "312312314@we.com",
					name: "张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				},
				{
					id: 3,
					mail: "312312314@we.com",
					name: "张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				},
				{
					id: 4,
					mail: "312312314@we.com",
					name: "张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				},
				{
					id: 5,
					mail: "312312314@we.com",
					name: "张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				},
				{
					id: 6,
					mail: "312312314@we.com",
					name: "张山",
					moreForeignName: "xiaoshd/fdsafd",
					moreChineseName: "哈可／飞机",
					gender: "男",
					familyMember: "里斯／王五",
					constellation: "天秤座",
					birthtime: "2019-10-01",
					birthplace: "广州",
					career: "编剧",
					phone: "13293120399",
					introduction:
						'文斯·吉利根（本名：George Vincent "Vince" Gilligan, Jr.，1967年2月10日出生）是一位美国的编剧、导演和制作人，以电视系列剧作品出名。他是《绝命毒师》的创作人，也曾与他人合作创作《孤枪客》，并担任过《X档案》的编剧和制作人。目前他正筹备两部全新的影集，分别是以警察为主题的《Battle Creek》，和《绝命毒师》的衍生作品《绝命律师》。'
				}
			],
			//列表下拉展示内容
			explandList: [
				{ label: "头像", prop: "mail" },
				{ label: "家庭成员", prop: "familyMember" },
				{ label: "个人简介", prop: "introduction" }
			],
			//弹窗
			isDialogVisable: false,
			dialogContent: [], //content参数{content,name,label,rules,placeholder}
			dialogTitle: ""
		};
	},
	methods: {
		// 展开列表
		async expandChange(row, column, cell, event) {
			if (typeof row[column.property] != "string") {
				return;
			}
			this.$refs.tableContent.toggleRowExpansion(row);
			if (row.wechatUser) {
				return;
			}
		},
		// 监听页码变化
		currentChange(pageNo) {
			this.pageNo = pageNo;
			console.log(this.pageNo);
		},
		//显示添加弹窗
		addVisableDialogShow() {
			let addContent = [
				{
					name: "name",
					label: "姓名",
					placeholder: "请输入姓名",
					rules: [
						{
							required: true,
							message: "请输入姓名",
							trigger: "blur"
						}
					]
				},
				{
					name: "gender",
					label: "性别",
					placeholder: "请输入性别",
					rules: [
						{
							required: true,
							message: "请输入性别",
							trigger: "blur"
						}
					]
				},
				{
					name: "birthtime",
					label: "出生日期",
					placeholder: "请输入出生日期"
				},
				{
					name: "birthplace",
					label: "出生地",
					placeholder: "请输入出生地"
				},
				{
					name: "phone",
					label: "手机号码",
				}
			];
			this.isDialogVisable = true;
			this.dialogTitle = "添加用户"
			this.dialogContent = addContent;
		},
		//显示编辑弹窗
		editUserData(scope) {
			let content = scope.row;
			let editContent = [
				{
					content: "",
					name: "name",
					label: "姓名",
					placeholder: "请输入姓名",
					rules: [
						{
							required: true,
							message: "请输入姓名",
							trigger: "blur"
						}
					]
				},
				{
					content: "",
					name: "gender",
					label: "性别",
					placeholder: "请输入性别",
					rules: [
						{
							required: true,
							message: "请输入性别",
							trigger: "blur"
						}
					]
				},
				{
					content: "",
					name: "birthtime",
					label: "出生日期",
					placeholder: "请输入出生日期"
				},
				{
					content: "",
					name: "birthplace",
					label: "出生地",
					placeholder: "请输入出生地"
				},
				{
					content: "",
					name: "phone",
					label: "手机号码",
					placeholder: "请输入手机号码"
				}
			];
			let keys = Object.keys(content);
			editContent.forEach(item => {
				keys.forEach(key => {
					if(item.name == key) {
						item.content = content[key];
					}
				})
			})
			this.isDialogVisable = true;
			this.dialogTitle = "编辑用户"
			this.dialogContent = editContent;
		},
		// 获取弹窗数据
		getRulesForm(data) {
			console.log(data);
		},
		//跳转上传页面
		toUploadExcel() {
			this.$router.push('/account/upload/echarts');
		}
	}
};
</script>

<style scoped>
.block-content .table-desc {
	font-size: 13px;
	text-align: left;
	color: #888888;
	margin-bottom: 10px;
	padding-left: 10px;
}

/*  表头 */
.table-title {
	font-size: 14px;
	color: #333333;
	font-weight: "500";
	text-align: left;
}
.table-header-right {
	height: 24px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

/* 下拉展示 */
.expland-container {
	align-items: center;
	height: 80px;
	overflow: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.expland-wrapper {
	box-sizing: border-box;
	padding: 0 20px;
	display: flex;
	justify-content: flex-start;
	width: 100%;
}
.expland-title {
	font-size: 13px;
	color: #666;
	width: 10%;
	text-align: left;
}
.expland-desc {
	font-size: 13px;
	color: #666;
	width: 90%;
	text-align: left;
}
</style>