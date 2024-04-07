socket.on('homeSet', function(message){
  document.getElementById("JoinAsHomeButton").disabled = true
})

socket.on('homeReset', function(message){
  document.getElementById("JoinAsHomeButton").disabled = false
})

socket.on('visitorSet', function(message){
  document.getElementById("JoinAsVisitorButton").disabled = true
})

socket.on('visitorReset', function(message){
  document.getElementById("JoinAsVisitorButton").disabled = false
})

function handleJoinAsHomeButton(){
  socket.emit('selected',"")
  home = true
  let btn = document.getElementById("JoinAsHomeButton")
  btn.disabled = true //disable button
  btn.style.backgroundColor="lightgray"
  socket.emit('home', "")
  if(!isHomePlayerAssigned){
    isHomePlayerAssigned = true
    isHomeClient = true
  }
}

function handleJoinAsVisitorButton(){
  socket.emit('selected',"")
  away = true
  let btn = document.getElementById("JoinAsVisitorButton")
  btn.disabled = true //disable button
  btn.style.backgroundColor="lightgray"
  socket.emit('visitor', "")
  if(!isVisitorPlayerAssigned) {
    isVisitorPlayerAssigned = true
    isVisitorClient = true
  }
}

function handleJoinAsSpectatorButton(){
  socket.emit('selected',"")
  let btn = document.getElementById("JoinAsSpectatorButton")
  btn.disabled = true //disable button
  btn.style.backgroundColor="lightgray"
  if(!isSpectatorClient) {
    isSpectatorClient = true
  }
}