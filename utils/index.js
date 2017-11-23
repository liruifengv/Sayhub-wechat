import * as Mock from './mock'

//默认请求参数
const DEFAULT_REQUEST_OPTIONS = {
  url: '',
  data: {},
  header: {
    "Content-Type": "application/json"
  },
  method: 'GET',
  dataType: 'json'
}

let util = {
  isDEV: config.isDev,
  request (opt){
    let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt)
    let {url, data, header, method, dataType, mock = false} = options
    let self = this
    return new Promise((resolve, reject)=>{
      if(mock){
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data);
        } else {
          reject(res);
        }
      }else{
        wx.request({
          url: url,
          data: data,
          header: header,
          method: method,
          dataType: dataType,
          success: function (res) {
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data);
            } else {
              reject(res);
            }
          },
          fail: function (err) {
            reject(err);
          }
        })   
      }
    })
  }
}
export default util