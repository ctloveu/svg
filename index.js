/**
 * @description 手动导入svg时,在入口文件 import '@/icons';
 * @author 陈涛
 */

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

