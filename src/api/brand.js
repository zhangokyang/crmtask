//分页条件查询 五个参数 =====>对象
import instance from '../utils/request'
export function searchPage(searchParams) {
   return instance.get("/student/searchPageByCriteria",{params:searchParams});
}

export function deleteById(sid) {
  return instance.delete(`/student/delete/${sid}`);
}
