  
var btnTranslate= document.querySelector("#btn")
var txtArea= document.querySelector('#txt-area1')
var output= document.querySelector("#txt-area2")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
  return serverURL +"?"+"text="+ text
}

function errorHandler(error){
  console.log("error occured",error)
  alert("something wrong with server! please try again later")
}

btnTranslate.addEventListener("click",function clickEventHandler()
{
//  output.innerText = "ajajasjsjajjsj" + txtArea.value;
var inputText = txtArea.value;

fetch(getTranslationURL(inputText))
  .then(response=> response.json())
  .then(json=>{
    var translatedText = json.contents.translated;
    output.innerText = translatedText;
  })
  .catch(errorHandler)
})
