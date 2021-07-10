<template>
  <div class="brand-box">
    <!--查询表单-->
    <div class="search-box">
      <el-form :inline="true"  class="demo-form-inline" size="mini">
        <el-form-item label="品牌名称">
          <el-input  placeholder="品牌名称" v-model="searchParams.name"></el-input>
        </el-form-item>

        <el-form-item label="日期">
          <el-date-picker
            v-model="value2"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="left">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="findPage">查询</el-button>
          <el-button type="warning" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--操作按钮-->
    <div class="crud-box">
      <el-button type="primary" icon="el-icon-edit" size="mini">新建</el-button>
      <el-button type="success" icon="el-icon-edit" size="mini">修改</el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
    </div>
    <!--table展示数据-->
    <div class="table-box">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="checkBoxSelectionChange"
      >

        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          align="center"
          prop="sid"
          label="学生ID"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="学生姓名"
          width="180">
        </el-table-column>
        <el-table-column
          align="center"
          prop="department"
          label="所在系的网址">
          <template v-slot="suibianxie">
            <a :href="suibianxie.row.department" >{{suibianxie.row.department}}</a>
          </template>

        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="地址图标">
          <template v-slot="obj">
            <img :src="obj.row.address" height="35px" >
          </template>

        </el-table-column>
        <el-table-column
          align="center"
          prop="address"
          label="操作">
          <template v-slot="obj">
            <el-button type="success" icon="el-icon-edit" size="mini"></el-button>
            <el-popconfirm
              confirm-button-text='确认'
              cancel-button-text='取消'
              @confirm="deleteById"
              icon="el-icon-info"
              icon-color="red"
              title="确定删除这一条数据吗？"
            >
              <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini" @click="sid=obj.row.sid"></el-button>
            </el-popconfirm>
          </template>

        </el-table-column>
      </el-table>
    </div>
<!--    分页-->
    <div class="page-box">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="currentPageChange"
              :current-page="searchParams.currentPage"
              :page-size="searchParams.pageSize"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script >
  import brand from './index'
  export default brand;
</script>

<style scoped src="./index.scss" lang="scss">
</style>

