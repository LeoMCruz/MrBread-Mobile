import React from "react";

type MaskItem = string | RegExp;

export const currencyMask = (value: string): (string | RegExp)[] => {
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');
    // Garante ao menos 3 dígitos (1 para real e 2 para centavos)
    const padded = digits.padStart(3, '0');
  
    // Separa a parte inteira (reais) dos centavos
    const intPart = padded.slice(0, -2);
    const decimalPart = padded.slice(-2);
  
    // Array de máscara começando com "R$ "
    let maskArr: (string | RegExp)[] = ['R', '$', ' '];
  
    // Inverte intPart pra inserir '.' a cada 3 dígitos, da direita pra esquerda
    const reversed = intPart.split('').reverse();
    let realMask: (string | RegExp)[] = [];
  
    for (let i = 0; i < reversed.length; i++) {
      if (i > 0 && i % 3 === 0) {
        realMask.push('.');
      }
      realMask.push(/\d/);
    }
  
    // Volta para ordem normal
    realMask.reverse();
  
    // Concatena na máscara principal
    maskArr = maskArr.concat(realMask);
  
    // Adiciona vírgula + 2 dígitos de centavos
    maskArr.push(',');
    maskArr.push(/\d/);
    maskArr.push(/\d/);
  
    return maskArr;
  };