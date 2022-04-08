let quantidadePositivos = 0;
let valorPositivo = []
let valorUser = [];

for (let i = 0; i < 6; i++) {

  const valorInformadoPeloUsuario = gets();
  valorUser.push(valorInformadoPeloUsuario);
}
for (let i = 0; i < valorUser.length; i++) {
  const e = valorUser[i];
  if (Math.sign(e) == 1) {
        
    valorPositivo.push(e)
  }
}

quantidadePositivos = valorPositivo.length

print(`${quantidadePositivos} valores positivos`);


////////////////////////////////////////////////////////////
let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final < inicio && inicio > 3 ) {
    print(    'minguante'           );
} else if (inicio >= 3 && final <= 96) {
    print( 'crescente'                );                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}

////////////////////////////////////////////////////////

