body{
  background: linear-gradient(120deg,#ffafbd,#ffc3a0);
  font-family: 'Sacramento', cursive;
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  margin:0;
}

/* Card */
.container{
  background:white;
  padding:40px;
  border-radius:25px;
  text-align:center;
  width:340px;
  box-shadow:0 0 20px pink;
  animation:fadeIn 1.5s ease;
}

@keyframes fadeIn{
  from{opacity:0; transform:translateY(30px);}
  to{opacity:1; transform:translateY(0);}
}

h1{
  font-size:42px;
  color:#ff477e;
}

img{
  width:220px;
  margin:20px 0;
}

/* Buttons */
.buttons{
  display:flex;
  justify-content:space-around;
}

button{
  padding:12px 26px;
  font-size:22px;
  border:none;
  border-radius:12px;
  cursor:pointer;
  transition:0.3s;
}

#yesBtn{
  background:#38b000;
  color:white;
}

#noBtn{
  background:#ff4d6d;
  color:white;
  position:relative;
}

button:hover{
  transform:scale(1.15);
}

/* Message */
#message{
  margin-top:20px;
  font-size:28px;
  color:#ff477e;
}

/* Mobile */
@media(max-width:480px){
  .container{width:90%;}
  h1{font-size:32px;}
  button{font-size:18px;}
}
