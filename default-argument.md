# 기본값 매개변수

기본값 함수 매개변수 (**default function parameter**)를 사용하면 값이 없거나 `undefined`가 전달될 경우 이름붙은 매개변수를 기본값으로 초기화할 수 있습니다.

JavaScript에서, 함수의 매개변수는 `[undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)`가 기본입니다. 그러나, 일부 상황에서는 다른 기본 값을 설정하는 것이 유용할 수 있습니다. 이때가 바로 기본값 매개변수가 필요할 때 입니다.

과거에 기본값 설정을 위한 일반적인 방법은 함수 내부(body)에서 매개변수 값을 검사해 `undefined`인 경우 값을 할당하는 것이었습니다.

출처: https://www.google.com/search?q=default+argument&ei=FITfYoFWobDaug_ZrrrIDw&ved=0ahUKEwiBsOmo8ZX5AhUhmFYBHVmXDvkQ4dUDCA4&uact=5&oq=default+argument&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADSgQIQRgASgQIRhgAUK4FWK4FYNAIaAFwAXgAgAGcAYgBnAGSAQMwLjGYAQCgAQKgAQHIAQrAAQE&sclient=gws-wiz
