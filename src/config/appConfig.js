import 'dotenv/config';

/**
 * 시스템 전체 설정을 중앙 집중 관리하는 Config 객체입니다.
 */
export const config = {
    api: {
        exchangeApiUrl: process.env.EXCHANGE_API_URL || 'https://open.er-api.com/v6/latest',
    }
};