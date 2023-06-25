function validate(email) {
  const regex = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
  return regex.test(email);
}
console.log(validate('a@gmail.com'));
console.log(validate('ab@yahoo.com'));
console.log(validate('abc@hotmail.com'));
console.log(validate('@gmail.com'));
console.log(validate('ab@gmail.'));
console.log(validate('@#abc@gmail.com'));
