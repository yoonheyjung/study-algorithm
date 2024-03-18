function solution(N, M) {
  const msgArr = Array.from({ length: N }, () => []);

  for (let i = 0; i < M.length; i++) {
    const receipientIP = M[i][1];
    const empNum = receipientIP.split('.')[3];

    msgArr[empNum].push(M[i][2]);
  }

  return msgArr;
}
console.log(
  solution(3, [
    ['192.168.1.0', '192.168.1.1', 'Hi'],
    ['192.168.1.1', '192.168.1.0', 'Hello'],
    ['192.168.1.0', '192.168.1.1', 'I want to go home'],
  ]),
);

/**
  solution2 = 사원 번호에 따른 ip 주소를 처리한다
 * 사원들이 많아져서 사원번호에서 256을 나눈몫 + 1이 된다
 */
function solution2(N, M) {
  const msgArr = Array.from({ length: N }, () => []);

  for (let i = 0; i < M.length; i++) {
    const receipientIP = M[i][1];
    console.log(`🚀 ~ solution2 ~ receipientIP:`, receipientIP);
    const empNum =
      (Number(receipientIP.split('.')[2]) - 1) * 256 +
      Number(receipientIP.split('.')[3]);

    console.log(`🚀 ~ solution2 ~ empNum:`, empNum);
    msgArr[empNum].push(M[i][2]);
  }

  return msgArr;
}

console.log(
  solution2(1001, [
    ['192.168.1.255', '192.168.4.232', 'Hello222e'],
    ['192.168.1.0', '192.168.1.3', 'Hi'],
    ['192.168.1.3', '192.168.1.0', 'Hello'],
    ['192.168.1.0', '192.168.1.3', 'I want to go home'],
  ]),
);

/**
 * solution3 : 메세지가 이동한 경로를 추적한다
 */
function getEmpNum(ip) {
  return (Number(ip.split('.')[2]) - 1) * 256 + Number(ip.split('.')[3]);
}

function solution3(N, M) {
  const routerArr = [];

  for (let i = 0; i < M.length; i++) {
    const receipient = getEmpNum(M[i][1]);
    const sender = getEmpNum(M[i][0]);

    const tempArr = [String(sender)];

    let startRouter = M[i][0].split('.')[2];
    let endRouter = M[i][1].split('.')[2];

    // 라우터
    if (startRouter == endRouter) tempArr.push(`R${startRouter}`);
    else if (startRouter < endRouter) {
      for (startRouter; startRouter <= endRouter; startRouter++) {
        tempArr.push(`R${startRouter}`);
      }
    } else if (startRouter > endRouter) {
      for (let i = 0; i < startRouter; i++) {
        tempArr.push(`R${startRouter - i}`);
      }
    }

    tempArr.push(String(receipient));

    routerArr.push(tempArr);
  }

  return routerArr;
}

console.log(
  solution3(3000, [
    ['192.168.1.2', '192.168.1.108', 'Hi'],
    ['192.168.2.1', '192.168.2.0', 'Hello'],
    ['192.168.2.11', '192.168.3.240', 'Hello'],
    ['192.168.1.0', '192.168.3.240', 'Hello'],
    ['192.168.3.40', '192.168.1.240', 'Hello'],
  ]),
);
