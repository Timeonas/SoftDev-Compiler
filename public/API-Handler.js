
let text = "";

function build() {
    let codeOutput="";
    let language = "";
    let input = "";
    let code = document.getElementById("code").value;

    if(code===""){
        document.getElementById("output").innerHTML = "Please enter code";
        return null;
    }

    const encodedParams = new URLSearchParams();
    encodedParams.append("code", code);

    language = document.getElementById("languages").value;
    if(language===""){
        document.getElementById("output").innerHTML = "Please select a language";
        return null
    }
    encodedParams.append("language", language);

    //Handling Inputs
    input = document.getElementById("inp1").value;
    if(input!==""){
        encodedParams.append("input", input);
    }

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '7f5ebdc991msh779918a8b5d23a9p10d434jsne9e7e4a1586e',
            'X-RapidAPI-Host': 'codex7.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://codex7.p.rapidapi.com/', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            codeOutput = data.output;
            document.getElementById("outputDisplay").innerHTML = text;
            if(codeOutput===""&&data.error==="") {
                document.getElementById("output").innerHTML = "No Output";
            }
            else if(codeOutput!==""){
                document.getElementById("output").innerHTML = codeOutput;
            }
            else
                document.getElementById("output").innerHTML = "Failed to Compile, Error: "+data.error;
        })
        .catch(err => console.error(err));
}

function select(){
    let el = document.getElementById("languages");
     text = el.options[el.selectedIndex].text;
    if(text==="--Please choose an option--"){
        document.getElementById("Language").innerHTML = "None";
        return null;
    }
    document.getElementById("Language").innerHTML = text;
}
