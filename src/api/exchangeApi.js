import axios from 'axios';
import { config } from '../config/appConfig.js';

const BASE_URL = config.api.exchangeApiUrl;

/**
 * 특정 통화를 기준으로 환율 데이터를 가져옵니다.
 * @param {string} baseCurrency - 기준 통화 (기본값 : 'USD')
 * @returns {Promise<Object>} 환율 데이터 객체
 */
export const fetchExchangeRates = async (baseCurrency = 'USD') => {
    try {
        const response = await axios.get(`${BASE_URL}/${baseCurrency}`);
        
        // axios는 응답 데이터를 .data에 담아줍니다.
        return response.data;
    } catch (err) {
        // 시니어 팁
        // 에러 발생 시 단순히 로그만 찍는게 아니라
        // 호출한 곳에서 대응할 수 있도록 다시 던져주거나 명확한 메시지를 남깁니다.
        console.error(`[API Error] ${baseCurrency} 환율 정보를 가져오는데 실패했습니다 : `, err.message);
        throw err
    }
}