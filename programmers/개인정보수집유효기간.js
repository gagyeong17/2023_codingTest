function solution(today, terms, privacies) {
  const answer = [];

  const expire = new Date(today);
  const termsObj = {};
  terms.forEach((item) => {
    const [type, term] = item.split(' ');
    termsObj[type] = Number(term);
  });
  // console.log(termsObj) //{ A: 6, B: 12, C: 3 }
  privacies.forEach((item, idx) => {
    const [date, type] = item.split(' ');
    const privacyDate = new Date(date);
    //개인정보 수집한 날짜의 달을 setMonth를 활용해서 타입이 A라면 6월만큼 더해주기
    privacyDate.setMonth(privacyDate.getMonth() + termsObj[type]);

    if (privacyDate <= expire)
      //개인정보 수집 날보다 만료일이 더 크다면
      answer.push(idx + 1);
  });
  return answer;
}
