
let text = "";

function build() {
    let codeOutput="";
    let language = "";
    let code = document.getElementById("code").value;

    if(code===""){
        document.getElementById("output").innerHTML = "";
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

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '',
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
