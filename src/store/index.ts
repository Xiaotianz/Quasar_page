// 分模块写pinia数据
import { createPinia } from 'pinia'
// pinia数据持久化插件 暂未安装 如需使用
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia();
store.use(piniaPluginPersist);
export default store
