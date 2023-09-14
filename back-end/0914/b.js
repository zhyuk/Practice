console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);

console.log("안녕하세요");
console.log('안녕하세요');

// 코드와 문자열에 같은 따옴표를 사용하고 싶다면 \ 사용
console.log("This is \"String\"");
console.log('This is \'String\'');

// \n = 줄 바꿈 \t = 수평 탭 \" = 큰 따옴표 \\ = 역슬래시 
console.log("동해물과 백두산이\n마르고 닳도록");
console.log("안녕\t하세요" + "\"" + "반갑습니" + "다");
console.log("\\\\");

// 문자열[숫자] = 문자열의 숫자번째 문자 선택
console.log("안녕하세요"[0]);
console.log("안녕하세요"[1]);
console.log("안녕하세요"[2]);

// 비교 연산자
console.log(52 < 273);
console.log(52 > 273);
console.log("하마" < "가방");

// 논리 연산자
let hours = (new Date()).getHours();
// || = 논리합 연산자, 앞뒤 중 참이 있으면 참
console.log(hours < 3 || 8 < hours);
// && = 논리곱 연산자 , 앞뒤 모두 참이여야만 참
console.log(3 <= hours && hours <= 8);

// var, let 차이 var = 동명이인 가능 / let = 동명이인 불가능 / 둘 다 재할당 가능
let a = "test1";
a = "test2";
a = "test3";
console.log(a);

// const는 선언과 할당이 같은 줄에 위치해야만 인식함. 
const b = "test";
console.log(b);

let pi = 3.14159265;
let radius = 10;

// 변수 활용
console.log(`둘레: ${2 * pi * radius}`);
console.log(`넓이: ${pi * radius * radius}`);

// 숫자열 복합 대입 연산자
let output = 0;
output = output + 52;
output += 273;
output += 103;

console.log(output);

// 문자열 복합 대입 연산자
let output2 = "hello ";
output2 += "World";
output2 += "!";

console.log(output2);

// 증감연산자, num++ = num = num + 1
let number = 10;
// 10 출력 후 1을 더하기 때문에 출력된 값 : 10, 실제 값 : 11
console.log(number++);
// number 변수에 +1을 더한 값 출력. (=12)
console.log(++number);
console.log(number--);
console.log(--number);

let num = 10;
console.log(num);
num++;
num++;
console.log(num);
console.log(num);
num--;
num--;
console.log(num);

// 강제 자료형 변환
console.log(Number("52"));
console.log(Number("52.273"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("안녕하세요"));

// NaN 변수 생성
let nan = Number("안녕하세요");
let undefinedVariable;

// NaN끼리 비교
console.log(nan == nan);
console.log(nan |= nan);

// isNaN() 함수로 NaN인지 확인
console.log(isNaN(nan));
console.log(!!0);
console.log(Boolean(nan));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefinedVariable));

// 하나라도 문자열일 경우 문자열로 변환
console.log(52 + "273");
console.log("52" + 273);
console.log("52" + "273")

//상수 선언
const constant = "변경할 수 없어요";
// constant = "";

// 출력 = 오류 : const는 한 줄에 선언 및 할당이 들어가야만 함, 그리고 재선언 재할당 불가능
console.log(constant);