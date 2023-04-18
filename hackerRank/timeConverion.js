function timeConversion(s) {
  let hh = s.slice(0, 2);
  let mm = s.slice(3, 5);
  let ss = s.slice(6, 8);

  if (s.includes('PM') && hh !== '12') {
    hh = Number(hh) + 12;
  }
  if (s.includes('AM') && hh === '12') {
    hh = '00';
  }
  return `${hh}:${mm}:${ss}`;
}
