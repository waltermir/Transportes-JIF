//Documentos
var choferSchema = mongoose.Schema({
   nombre: String,
   apellido: String,
   tel_particular : String,
   tel_particular : String,
   direccion: String,
   email: String
});

var chofer = mongoose.model('chofer', choferSchema);


listarChoferes(res){
   chofer.find({}, function(error, choferes){
      if(error){
         res.send('Error.');
      }else{
         res.send(choferes);
      }
   })

}