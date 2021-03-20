var SpeechRecognition= window.webkitSpeechRecognition;
var recongnition= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recongnition.start();

}

recongnition.onresult=function run(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    console.log(content)
    if (content=="take my selfie") {
        document.getElementById("textbox").innerHTML=content

        speak()  
    }
    
       
    
}

function speak() {
    var speechapi = window.speechSynthesis
//get data for speaking
    speakdata= "taking your selfie in 5 seconds"
   // convert text into speech
   
   var saythis = new SpeechSynthesisUtterance(speakdata)
   // code for speaking

   speechapi.speak(saythis)
   Webcam.attach("#camera") 

   setTimeout(
       function () {
         snapshot()  
         download()
       },5000
   )
}

// code for setting webcam

Webcam.set({
    height: 250,
    width: 360,
    image_format: "jpeg",
    jpeg_quality: 90


    
})

function snapshot() {
   
    Webcam.snap(
        function (pic) {
            document.getElementById("result").innerHTML=`<img src="${pic}" id="selfie_image">`
        }
    )
}

function download() {
    var link = document.getElementById("link")
    var image = document.getElementById("selfie_image").src
    link.href=image
    link.click()
}


    
