const getData = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET','http://localhost:3000/students')
    xhr.responseType = 'json'
    xhr.onload = () => {
        const data = xhr.response
        console.log(data)
    }
    xhr.send()
}