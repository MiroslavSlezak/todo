let myToDos = [{
    text: "Vynests",
    done: false
},{
    text: "Nakoupit",
    done: false
},{
    text: "Uklidit",
    done: true
},{
    text: "Nakrmit psa",
    done: true
},{
    text: "Umyt nadobi",
    done: false
}]


bodyElement.onload = function() {
   for(let i = 0; i < myToDos.length; i++){
     let task = document.createElement("p")
     task.textContent = myToDos[i].text
     document.body.appendChild(task);
    }
}

sus.onclick = function() {
     document.body.appendChild(document.createElement("br"));
     for(let i = 0; i < myToDos.length; i++){
        let task = document.createElement("input");
        task.type = "checkbox";
        task.id = i;
        task.name = i;
        document.body.appendChild(task);
        task = document.createElement("label");
        task.for =  i;
        task.style.fontFamily = "verdana"
        task.textContent = myToDos[i].text;
        document.body.appendChild(task);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));
       }
 }

 sus2.onclick = function() {
    window.alert("Ono to nefunguje, tak to nech být");
    document.body.appendChild(document.createElement("br"));
    for(let i = 0; i < myToDos.length; i++){
        if(myToDos[i].done == True){
            let task = document.createElement("input");
            task.type = "checkbox";
            task.id = i;
            task.name = i;
            document.body.appendChild(task);
            task = document.createElement("label");
            task.for =  i;
            task.style.fontFamily = "verdana"
            task.textContent = myToDos[i].text;
            document.body.appendChild(task);
            document.body.appendChild(document.createElement("br"));
            document.body.appendChild(document.createElement("br"));}
      }
}




























































let pokus = function() {
    if (confirm("xdéčko")) {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        document.body.style.backgroundColor = "red";
        pokus();
      } else {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        window.getComputedStyle(document.body).backgroundColor = "red"
        pokus();
      } 
}

sus1.onclick = function(){
    pokus();
}