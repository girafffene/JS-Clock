function time() {
  var date = new Date()
  var hr = date.getHours()
  var min = date.getMinutes()
  var sec = date.getSeconds()

  var arr = [hr, min, sec].map(function(num) {
    return num < 10 ? "0" + num : String(num)
  })

  hrs = arr[0]
  mins = arr[1]
  secs = arr[2]

  return hrs + " : " + mins + " : " + secs
}

function output(time) {
  const color = " # " + time

  document.body.bgColor = color
  document.querySelector("#clock").textContent = color
}

setInterval(function() {
  output(time())
}, 1000)
