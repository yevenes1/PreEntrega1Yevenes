const sumar = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 + num2;
    console.log(`El resultado de la suma es: ${resultado}`);
  }
  
  const restar = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 - num2;
    console.log(`El resultado de la resta es: ${resultado}`);
  }
  
  const multiplicar = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 * num2;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
  }
  
  const dividir = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultado = num1 / num2;
    console.log(`El resultado de la división es: ${resultado}`);
  }
  