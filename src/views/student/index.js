import {searchPage, deleteById} from '../../api/brand'

let brand = {
  data() {
    return {
      //日期组件
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      //日期变量名
      value2: '',
      //table的list
      tableData: [],
      total: 0,
      sid: 0,
      searchParams: {
        currentPage: 1,
        pageSize: 5
      }
    };
  },
  methods: {
    //复选框的change事件，删除和修改拿到id
    async deleteById() {
      await deleteById(this.sid);
      this.findPage();
    },
    checkBoxSelectionChange() {

    },
    currentPageChange(currentPage) {
      console.log("当前页：", currentPage);
      this.searchParams.currentPage = currentPage;
      this.findPage();
    },
    async findPage() {
      let response = await searchPage(this.searchParams);//等到这行执行完了，再走下面的
      this.total = response.total;
      this.tableData = response.data;
      console.log("返回的this.total 数量:", response.total, this.total);
    },
    resetForm() {
      this.searchParams = {
        currentPage: 1,
        pageSize: 5
      }
      this.value2 = '';
      this.findPage();
    }
  },
  created() {
    this.findPage();
  }
};

export default brand;
