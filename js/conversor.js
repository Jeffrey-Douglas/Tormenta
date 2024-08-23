function atualizarInputs(atualizadoPor) {
  const inputs = document.querySelectorAll("input[type='number']");

  const valorAtualizado = parseFloat(inputs[atualizadoPor - 1].value);

  switch (atualizadoPor) {
    case 1:
      inputs[1].value = valorAtualizado * 10;
      inputs[2].value = valorAtualizado * 100;
      inputs[3].value = valorAtualizado * 1000;
      break;
    case 2:
      inputs[0].value = valorAtualizado / 10;
      inputs[2].value = valorAtualizado * 10;
      inputs[3].value = valorAtualizado * 100;
      break;
    case 3:
      inputs[0].value = valorAtualizado / 100;
      inputs[1].value = valorAtualizado / 10;
      inputs[3].value = valorAtualizado * 10;
      break;
    case 4:
      inputs[0].value = valorAtualizado / 1000;
      inputs[1].value = valorAtualizado / 100;
      inputs[2].value = valorAtualizado / 10;
      break;
    default:
      break;
  }
}