function cambiarEspacios(){
var Palabrasclave = $('#palabrasBusqueda').val();
var sustitucion = Palabrasclave.replace(/[ ]/gi,',');
return sustitucion.toString();
}


(function BucarFotos() {
    var tags = cambiarEspacios();
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: tags,
      tagmode: $('#OpcionBusqueda').val(),
      format: "json"
    })
      .done(function( data ) {
        $.each( data.items, function( i, item ) {
          $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
          if ( i === 3 ) {
            return false;
            console.log( "hola" );
          }
        });
      });
  })();

