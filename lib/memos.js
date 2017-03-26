const req = require.context('../memos/', true)

module.exports = req.keys().reduce((memos, name, id) => {
  const memo = req(name)
  return memos.concat({id, component: memo.default, createdAt: memo.createdAt});
}, []).sort((a,b) => b.createdAt - a.createdAt)
