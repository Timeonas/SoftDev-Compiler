
function build() {
    let codeOutput;
    let code = document.getElementById("code").value;

    const encodedParams = new URLSearchParams();
    encodedParams.append("code", code);
    encodedParams.append("language", "py");

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
            if(codeOutput!="") {
                document.getElementById("output").innerHTML = codeOutput;
            }
            else
                document.getElementById("output").innerHTML = "Failed to Compile, Error: "+data.error;
        })
        .catch(err => console.error(err));
}