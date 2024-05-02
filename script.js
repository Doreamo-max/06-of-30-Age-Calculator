*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins' , sans-serif;
    box-sizing: border-box;
}
.container{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg,#4203a4 ,#90bafc);
    color: #fff;
    padding: 10px;
}
.calculator{
    width: 100%;
    margin-top: 10%;
    margin-left: 10%;
    max-width: 600px;
}
.calculator h1{
    font-size: 60px;
}
.calculator h1 span{
   color:#ffff76 ;
}
.input-box{
      margin: 40px 0;
      padding: 35px;
      background: rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
}
.input-box input{
    flex: 1;
    margin-right: 20px;
    padding: 14px 20px;
    border: 0;
    outline: 0;
    font-size: 18px;
    border-radius: 5px;
    position: relative;
}
.input-box button{
    background: #ffff76;
    border: 0;
    outline: 0;
    padding: 15px 30px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    color: #333;
}  
/* .input-box input::-webkit-calendar-picker-indicator{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    position: absolute;
    background-position: calc(100% -10px);
    background-size: 30px;
    cursor: pointer;
}  */

#result{
    font-size: 23px;
}
#result span{
    color: #ffff76;
}
