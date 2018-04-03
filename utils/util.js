const formatDate = dateStr => {
  if (!dateStr) {
    return '';
  }
  let originYear = dateStr.slice(0,4)
  let originMongth = dateStr.slice(5,7)      
  let originDate = dateStr.slice(8,10)
  let originTime = dateStr.slice(11,19)
  let convertStr = `${originYear}年${originMongth}月${originDate}日 ${originTime}`
  return convertStr
}

module.exports = {
  formatDate: formatDate
}
