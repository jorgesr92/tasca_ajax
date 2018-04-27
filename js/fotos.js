function cambiarEspacios(){
  var Palabrasclave = $('#palabrasBusqueda').val();
  var sustitucion = Palabrasclave.replace(/[ ]/gi,',');
  return sustitucion.toString();
  }

function buscarFotos(){ //metodo que realiza la busqueda de fotos, llamada ajax y obtencion de la informacion de las fotos
  $('td').remove();
        var palabras = cambiarEspacios();
        $.ajax({
            url:"http://api.flickr.com/services/feeds/photos_public.gne",
            type: "GET",
            async: true,
            data: "tags="+palabras+"&tagmode="+$('#OpcionBusqueda').val()+"&format=json&jsoncallback=?",
            dataType: "json",
            success: function (result){
                $.each(result.items,function(i,item){
                    var quadre = $("<tr> <td><img src='"+item.media.m+"'></td>  <td>"+item.title+"</td> <td>"+item.author.slice(20,-2)+"</td> <td>"+item.published.substr(0,10)+"</td><td>"+item.tags+"</td> <td><p><a href='"+item.link+"'>Link</a></p></td></tr>");    
                     $('#resultats').append(quadre);
                })
            },
            error: function(jqXHR , textStatus , errorThrown){
                alert(JSON.parse(jqXHR.responseText));
            }
        });
        return false;
}

