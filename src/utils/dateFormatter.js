/**
 * API에서 받은 날짜 문자열을 한국어 방식으로 변환합니다.
 * @param {string} dateString - 변환할 날짜 문자열 (예 : Sun, 08 Mar 2026 ...)
 * @returns {string} 변환된 날짜 (예 : 2026년 3월 8일 일요일)
 */
export const formatToKoreanDate = (dateString) => {
    if (!dateString) return '날짜 정보 없음';

    const date = new Date(dateString);

    // 한국어(ko-KR) 형식으로 날짜와 요일을 포맷팅합니다.
    return new Intl.DateTimeFormat('ko-KR', {
        dateStyle: 'full',
        timeStyle: 'short'
    }).format(date);
}