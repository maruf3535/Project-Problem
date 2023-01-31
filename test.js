var code = document.getElementById("code");
var submitBtn = document.getElementById('submitBtn');
const answer = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
submitBtn.addEventListener('click', ()=>{
    var codeText = code.value.replace(/(\r\n|\n|\r)/gm, "").replaceAll(" ", "");
    console.log(codeText);
    if(codeText == answer){
        console.log("Correct");
    }
    else{
        console.log("Wrong");        
    }
})