const buildPyramid = (height) => {
 
    var rows,c;
   for( rows=0; rows<height; rows++) {
        var output='';

             for( c=0; c<=( height-rows ); c++)
                  output+= ' ';

             for( c=0; c<=rows; c++)
                  output+= ' * ';

   console.log(output);
   }

};
 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Input height of the pyramid:', height => {
    console.log(height);
    buildPyramid(height);
    readline.close();
  });