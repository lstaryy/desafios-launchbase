const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

for (let usuario of usuarios) {
    // join() adiciona todos os elementos da string, separados pelo parâmetro escolhido
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(`, `)}`)
}

function checaSeUsuarioUsaCSS(usuario) {
    // percorrer um array (método novo)
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == `CSS`){
            return true
        }
    }
    return false
}

// percorrer um array (método clássico)
for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
  }