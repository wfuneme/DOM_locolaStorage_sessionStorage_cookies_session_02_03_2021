window.onload = function(){
    let object = new Object({
        nombre : "Willmer",
        apellido : "Funeme",
        Saludar : function(){
            return `Hola ${this.nombre} ${this.apellido} saludo desde el Chache`; 
        }
    })
     localStorage.setItem("response-data", JSON.stringify({mesaje: "seccuss", data: object.Saludar()}));
    let nombre = "data";
    const frame = document.createDocumentFragment();
    caches.open(nombre).then(function(cache) {
        cache.add("Cache/app.js");
        cache.match("Cache/app.js").then(function(info){
            info.text().then(function(variable){
                const nodo = document.createElement("script");
                const text = document.createTextNode(variable);
                nodo.appendChild(text);
                document.head.appendChild(nodo);
                object.edad = 41;
                object.Miedad = function(){
                    return `El (la) señor(a): ${this.nombre} ${this.apellido} tiene ${this.edad} años`;
                };
                object.Saludar = function(){
                    return `Hola ${this.nombre} ${this.apellido}. Te envío saludo desde Chache`; 
                }
                console.log(object);
    //            response.success = object.Saludar();
      //          response.success = object.Miedad();
        //        response.mensaje = object.Saludar();
          //      response.mensaje = object.Miedad();
                localStorage.setItem("respuesta", JSON.stringify(response));
            })
        });
    });
     let lista = [];
     lista["Nombre"] = "Willmer";
     let data = new Object({
         nombre : "Willmer2",
         apellido : "Funeme SanMartin",
         edad : 41
     });
     sessionStorage.setItem("Informacion", JSON.stringify(data));
     console.log(JSON.parse(sessionStorage.getItem("Informacion")));
     const medioId = document.getElementById("inpu_nombre2");
      console.log(medioId.innerHTML);   //Tomamos los datos de la etiqueta con los nodos ("Las etiquetas hijos")
      console.log(medioId.innerText);   //Tomamos los datos de la etiqueta sin los nodos ("Las etiquetas hijos")
      console.log(medioId.textContent); //Tomamos los datos de la etiqueta sin los nodos ("Las etiquetas hijos") con su espaciado
     const medioClass = document.getElementsByClassName("pequeño");
      medioId.classList.add("pequeño"); //Agregamos un clase
      medioId.classList.remove("grande") //Removemos un clase
      medioId.classList.toggle("pequeño", true); //Agregamos y removemos una clase siempre y cuando no de pasemos el segundo valor (true, false)
      medioId.classList.replace("extraGrande", "pequeño"); //Remplazamos un clase existente dentro del nodo por otra
     //const nodo = $("extraGrande");
     //console.log(nodo.classList);
}

// function $(id){
//     return document.querySelector(id);
// }
