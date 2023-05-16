function processData(input) {
  input.split('\r\n').forEach((str) => {
    //줄바꿈기준으로 분할
    let arr = str.split(';'); //세미클론 기준으로 분할
    let output = '';
    if (arr[0] === 'S') {
      let reg_exp = new RegExp(/[A-Z]/g);
      output = arr[2]
        .replace('()', '')
        .replace(reg_exp, ' $&')
        .toLowerCase()
        .trim();
      //console.log(output);
    } else if (arr[0] === 'C') {
      if (arr[1] === 'C') {
        let reg_exp = new RegExp(/\w+/g);
        output = arr[2]
          .replace(reg_exp, (args) => {
            return args.charAt(0).toUpperCase() + args.slice(1);
          })
          .replaceAll(' ', '');
      } else {
        let reg_exp = new RegExp(/\s\w/g);
        output = arr[2]
          .replace(reg_exp, (args) => {
            return args.toUpperCase(); //M이나 P인경우 대문자로 변환
          })
          .replaceAll(' ', '');
        output += arr[1] === 'M' ? '()' : '';
      }
      //console.log(output);
    }
    console.log(output);
  });
}
