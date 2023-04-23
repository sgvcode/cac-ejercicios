//Copiar código
var clipboard = new ClipboardJS('.btn');

      clipboard.on('success', function(e) {
        console.log('Copiado!');
        console.log(e);
      });

      clipboard.on('error', function(e) {
        console.log('Error!');
        console.log(e);
      });
//Fin copiar