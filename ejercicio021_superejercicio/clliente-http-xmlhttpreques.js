function getVideojuegos(url,port,recurso){
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange",()=>{
        const isDone = client.readyState===4;
        const isOk= client.status ===200;

        if(isDone&& isOk){
            console.log(client.responseText );
        }
    });

    client.open("GET",`${url}:${port}/${recurso}`);
    client.send();
}

getVideojuegos("http://localhost",5500,"/ejercicio021_superejercicio/datos.json");