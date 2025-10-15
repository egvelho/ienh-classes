function disparaComABesta({ flechas }) {
  let flechasAtuais = flechas;
  let acertos = 0,
    erros = 0;
  return () => {
    if (flechasAtuais === 0) {
      console.log(
        `Você não tem mais flechas.\nAcertos: ${acertos}\nErros: ${erros}`
      );
      return;
    }

    const isAcerto = Math.random() < 0.4;
    if (isAcerto) {
      console.log(`Você acertou! Flechas restantes: ${flechasAtuais}`);
      acertos++;
    } else {
      console.log(`Você errou! Flechas restantes: ${flechasAtuais}`);
      erros++;
    }

    flechasAtuais--;
  };
}

const dispara = disparaComABesta({ flechas: 10 });

new Array(11).fill(null).forEach(dispara);
