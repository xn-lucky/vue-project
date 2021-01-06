import Vue from 'vue'
import { Button, Pagination, Message, Dialog } from 'element-ui'

Vue.prototype.$message = Message;
Vue.use(Button)
Vue.use(Pagination)
Vue.use(Dialog);
