import { get, del, post, put } from '@/utils/request'

// 获取用户列表
export function getList(page, per = 10) {
  return get('/api/v1/admin/product_categories', {
    page,
    per
  })
}

// 根据id删除
export function removeOne(id) {
  return del('/api/v1/admin/product_categories/' + id)
}

// 创建
export const create = data => post('/api/v1/admin/product_categories', data)

// 根基id获取一条记录
export const one = id => get('/api/v1/admin/product_categories/' + id)

// 根据id修改一条记录
export const update = (id, data) =>
  put('/api/v1/admin/product_categories/' + id, data)
console.log(data, id)
