const objToUrl = (obj:any):string => {
  let arr = [];
  for(let i in obj){
      if (obj.hasOwnProperty(i)) {
          arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
  } 
  return arr.join("&");
}

interface data {
    [key:string]:string
}

const urlToObj = (url:string):object => {
  let string = url.split('&');
  let res:data = {};
  for(let i = 0;i<string.length;i++){
      let str = string[i].split('=');
      if(str[0]!=''){
          res[str[0]]=str[1];
      }
  }
  return res;
}
export {
    objToUrl,
    urlToObj,
}