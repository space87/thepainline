import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'
import firebase from 'nativescript-plugin-firebase';


if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
}).then(
 instance => {
   console.log('firebase.init done');
 },
 error => {
   console.log(`firebase.init error: ${error}`);
 }
);
Vue.prototype.$firebase = firebase;


new Vue({
  render: h => h('frame', [h(App)])
}).$start()
