import { getSummary } from "./services/exchangeService.js";
import { formatToKoreanDate } from "./utils/dateFormatter.js";
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const main = async () => {
    const rl = readline.createInterface({ input, output });
    console.log('--- 💱 실시간 환율 정보 조회기 시작 ---');

    try {
        // 1. 입력을 받습니다.
        const baseInput = await rl.question(`기준 통화를 입력하세요(기본값:USD)\n`);
        const targetsInput = await rl.question(`보고 싶은 통화들(쉼표 구분)\n`);

        // 2. 사용자가 입력한 값만 골라서 객체를 만듭니다.
        const options = {};
        if (baseInput.trim()) options.baseCurrency = baseInput.trim().toUpperCase();
        if (targetsInput.trim()) {
            options.targetCurrencies = targetsInput.split(',').map(t => t.trim().toUpperCase());
        }

        // 우리가 만든 서비스를 호출합니다.
        const result = await getSummary(options);

        // 결과 출력
        console.log('\n--- 📊 조회 결과 ---');
        console.log(`기준: ${result.base}`);
        console.log(`업데이트: ${formatToKoreanDate(result.date)}`);
        console.log('------------------');

        for (const [currency, rate] of Object.entries(result.rates)) {
            console.log(`${currency}: ${rate.toLocaleString()}`);
        }
    } catch (err) {
        console.error('⚠️ 오류:', err.message);
    } finally {
        rl.close();
    }
};

// 메인 함수 실행
main();