import { getSummary } from "./services/exchangeService.js";

const main = async () => {
    console.log('--- 💱 실시간 환율 정보 조회 시작 ---');

    try {
        // 우리가 만든 서비스를 호출합니다.
        const result = await getSummary();

        // 결과 출력
        console.log(`기준 통화 : ${result.base}`);
        console.log(`업데이트 : ${result.date}`);
        console.log('------------------------------');

        // 객체 안의 환율 정보를 출력합니다.
        for (const [currency, rate] of Object.entries(result.rates)) {
            console.log(`${currency}: ${rate.toLocaleString()}`);
        }

        console.log('------------------------------');
        console.log('조회를 성공적으로 마쳤습니다.');
    } catch (err) {
        console.error('⚠️ 프로그램을 실행하는 중 오류가 발생했습니다.');
        // 시니어 팁: 실제 서비스라면 여기서 슬랙 알림을 보내거나 재시도를 할 수 있습니다.
    }
};

// 메인 함수 실행
main();