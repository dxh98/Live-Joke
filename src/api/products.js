import { get, del, post, put } from '@/utils/request'

// 获取列表 param page(当前第几页) per（返回几条数据）
export function getList(page, per = 10) {
  return get('/api/v1/admin/products', {
    page,
    per
  })
}
// 根据id删除
export function removeOne(id) {
  return del('/api/v1/admin/products/' + id)
}

// 创建
export const create = data => post('/api/v1/admin/products', data)

// 根据id获取一条记录
export const one = id => get('/api/v1/admin/products/' + id)

// 根据id修改一条记录
export const update = (id, data) => put('/api/v1/admin/products/' + id, data)
