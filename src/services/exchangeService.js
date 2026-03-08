import { fetchExchangeRates } from "../api/exchangeApi.js";

/**
 * 특정 국가들의 환율 정보만 추출해서 정리합니다.
 * @param {string} baseCurrency - 기준 통화 (기본값 : 'USD')
 * @param {string[]} targetCurrencies - 보고 싶은 통화 목록
 */
export const getSummary = async (baseCurrency = 'USD', targetCurrencies = ['KRW', 'JPY']) => {
    try {
        // 1. API 호출 (앞서 만든 API 레이어를 사용합니다.)
        const data = await fetchExchangeRates(baseCurrency);
        const rates = data.rates;

        // 2. 필요한 데이터만 추출
        const summary = {
            base: baseCurrency,
            date: data.time_last_update_utc, // API가 준 마지막 업데이트 시간
            rates: {}
        };

        // 우리가 보고 싶은 국가들만 반복문으로 골라냅니다.
        targetCurrencies.forEach(currency => {
            if (rates[currency]) {
                summary.rates[currency] = rates[currency];
            }
        });

        return summary;
    } catch (err) {
        // 서비스 단에서도 에러가 날 수 있으니 명확한 메시지를 남깁니다.
        console.error(`[Service Error] 환율 요약 생성 중 오류 발생 : `, err.message);
        throw err;
    }
};