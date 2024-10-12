document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const foodName = document.getElementById('foodName').value;
    const calories = parseInt(document.getElementById('calories').value);

    // 假设这里有一个简单的算法来预测食品的降脂效果
    let prediction = '未知';
    if (calories < 200) {
        prediction = '低热量，有助于减肥';
    } else if (calories >= 200 && calories <= 500) {
        prediction = '中等热量，适量食用';
    } else {
        prediction = '高热量，建议减少摄入';
    }

    document.getElementById('result').innerHTML = `<p>${foodName} 的预测结果: ${prediction}</p>`;
});
