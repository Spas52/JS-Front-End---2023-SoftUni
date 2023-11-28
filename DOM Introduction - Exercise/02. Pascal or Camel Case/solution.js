function solve() {
  let text = document.getElementById('text').value;
  text = text.split(' ');
  let currentCase = document.getElementById('naming-convention').value;
  let result = '';
  let isValid = true;
  for (el of text) {
    if (currentCase === 'Camel Case') {
      let index = text.indexOf(el);
      let add = ''
      if (index === 0) {
        el = el.toLowerCase();
        add = el;
        result += el;
      } else {
        el = el.toLowerCase();
        add = el.charAt(0).toUpperCase() + el.slice(1);
        result += add
      }
    } else if (currentCase === 'Pascal Case') {
      let add = '';
      el = el.toLowerCase();
      add = el.charAt(0).toUpperCase() + el.slice(1);
      result += add
    } else {
      isValid = false;
    }
  }
  if (isValid) {
    document.getElementById('result').textContent = result;
  } else {
    document.getElementById('result').textContent = 'Error!';
  }

}

// function solve() {
//   let text = document.getElementById('text').value.split(' ');
//   let currentCase = document.getElementById('naming-convention').value;
//   let result = '';
//   let isValid = true;

//   for (let i = 0; i < text.length; i++) {
//       let el = text[i].toLowerCase();
//       let add = '';

//       if (currentCase === 'Camel Case') {
//           add = (i === 0) ? el : el.charAt(0).toUpperCase() + el.slice(1);
//       } else if (currentCase === 'Pascal Case') {
//           add = el.charAt(0).toUpperCase() + el.slice(1);
//       } else {
//           isValid = false;
//           break;
//       }

//       result += add;
//   }

//   document.getElementById('result').textContent = isValid ? result : 'Error!';
// }