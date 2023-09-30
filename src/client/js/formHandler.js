import { validUrl } from "./validUrl";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText)
    if(validUrl(formText)){
        postData("http://localhost:3000", { input: formText }).then((data) => {
        console.log("post",data); 
            document.getElementById('score_tag').innerHTML = `Polarity: ${data.score_tag}`
            document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`
            document.getElementById('error_msg').innerHTML = '';
        });  
    }else{
        document.getElementById('score_tag').innerHTML = '';
        document.getElementById('agreement').innerHTML = '';
        document.getElementById('subjectivity').innerHTML = '';
        document.getElementById('confidence').innerHTML = '';
        document.getElementById('irony').innerHTML = '';
        document.getElementById('error_msg').innerHTML = 'Invalid URL';
    }
}

const postData = async ( url = "", data = {})=>{
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
      body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
      console.log("error", error);
    }
}

export { handleSubmit }