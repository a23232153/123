const throwBtn = document.getElementById('throw-btn');
const resultBlock = document.getElementById('result-block');
const resultText = document.getElementById('result-text');
const lotteryBlock = document.getElementById('lottery-block');
const lotteryResult = document.getElementById('lottery-result');
const throwAgainBtn = document.getElementById('throw-again-btn');

// 籤詩庫
const lotLibrary = [
    { id: 1, poem: '天道酬勤，事事順遂', explanation: '努力會有回報，凡事多加油！' },
    { id: 2, poem: '雨過天晴，前途光明', explanation: '困難即將過去，未來值得期待！' },
    { id: 3, poem: '風波暫歇，靜待良機', explanation: '目前需要保持耐心，等待轉機。' },
    { id: 4, poem: '山高路遠，行路需謹慎', explanation: '前方有挑戰，小心應對，穩步前進。' },
];

// 擲筊邏輯
function throwJiao() {
    const outcomes = ['聖筊', '笑筊', '陰筊']; 
    const resultIndex = Math.floor(Math.random() * outcomes.length);
    return outcomes[resultIndex];
}

// 按鈕點擊事件
throwBtn.addEventListener('click', () => {
    const outcome = throwJiao();
    resultText.textContent = `擲筊結果：${outcome}`;
    resultBlock.style.display = 'block'; // 顯示結果區塊
    lotteryBlock.style.display = 'none'; // 隱藏籤詩區塊

    if (outcome === '聖筊') {
        const randomLottery = lotLibrary[Math.floor(Math.random() * lotLibrary.length)];
        lotteryResult.innerHTML = `
            <strong>籤號：</strong>${randomLottery.id}<br>
            <strong>籤詩：</strong>${randomLottery.poem}<br>
            <strong>解籤：</strong>${randomLottery.explanation}
        `;
        lotteryBlock.style.display = 'block'; // 顯示籤詩區塊
        throwBtn.style.display = 'none'; // 隱藏擲筊按鈕
    }
});

// 再次擲筊
throwAgainBtn.addEventListener('click', () => {
    resultBlock.style.display = 'none';
    lotteryBlock.style.display = 'none';
    throwBtn.style.display = 'inline-block'
});
