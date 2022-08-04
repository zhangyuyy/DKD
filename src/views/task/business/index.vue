<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="工单编号">
        <el-input v-model="formInline.user" placeholder="工单编号"></el-input>
      </el-form-item>
      <el-form-item label="工单状态">
        <el-select v-model="formInline.region" placeholder="工单状态">
          <el-option label="区域一"></el-option>
          <el-option label="区域二"></el-option>
          <el-option label="区域二"></el-option>
          <el-option label="区域一"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 按钮 -->
    <div>
      <el-row :gutter="20">
        <el-col :span="6">
          <el-button type="warning" size="small" icon="el-icon-plus"
            >新建</el-button
          >
          <el-button type="warning" size="small" class="btn"
            >工单配置</el-button
          >
        </el-col>
      </el-row>
    </div>
    <!-- 工单信息 -->
    <template class="eltable" :row-class-name="tableRowClassName">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="序号" width="80"> </el-table-column>
        <el-table-column prop="name" label="工单编号" width="130">
        </el-table-column>
        <el-table-column prop="name" label="设备编号" width="130">
        </el-table-column>
        <el-table-column prop="name" label="工单类型" width="130">
        </el-table-column>
        <el-table-column prop="name" label="工单方式" width="130">
        </el-table-column>
        <el-table-column prop="name" label="工单状态" width="130">
        </el-table-column>
        <el-table-column prop="name" label="运营人员" width="180">
        </el-table-column>
        <el-table-column prop="name" label="创建日期" width="130">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [
        {
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '1',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },

  props: {
    obj: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  created() {},
  updated() {},
  mounted() {},
  filters: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.box {
  background-color: #ccc;
}
.el-button--warning {
  background-color: #fc6f2a;
}
.btn {
  background-color: #fbf4f0;
  border-color: #fbf4f0;
  color: #555;
}
.el-table--border {
  margin-top: 20px;
}
.eltable {
  background-color: pink !important;
}
/* .el-card.is-always-shadow {
  -webkit-box-shadow: 0 2px 10px 0 rgb(0 0 0 / 6%);
} */
</style>
