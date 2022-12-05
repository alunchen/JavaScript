/**
 * promise 封装异步请求
 */
const ajax = function({methods = 'GET', url = ''}) {
  const promise = new Promise(function(resolve, reject){
    const client = new XMLHttpRequest();
    client.open(methods, url);
    client.onreadystatechange = function() {
      if(this.readyState !== 4) {
        return
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText))
      }
    };
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json')
    client.send();
  })
  return promise
}

ajax({
  methods: 'GET',
  url: './posts.json'
}).then(function(json) {
  console.log('contents:', json)
}, function(error){
  console.log('出错了:', error)
})