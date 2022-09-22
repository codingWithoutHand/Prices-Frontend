class App {
    item = './data/rice.json'

    constructor() {
        if (this.isDarkMode()) this.changeTheme(true)

        const ctx = document.getElementById('chart').getContext('2d')
        this.drawChart(ctx)

        this.handleItemButtom('rice', './data/rice.json', ctx)
        this.handleItemButtom('gasoline', './data/gasoline.json', ctx)
        this.handleItemButtom('sweet-potato', './data/sweet_potato.json', ctx)

        const newsList = ['hello', 'asfjaio', 'dafasdf']
        for (let i = 0; i < newsList.length; i++) {
            this.showNews(newsList[i])
            // time sleep
        }
    }

    showNews(news) {
        const newsText = document.getElementById('news')
        newsText.innerText = news
    }

    handleItemButtom(id, item, ctx) {
        document.getElementById(id).addEventListener('click', () => {
            this.myChart.destroy()
            this.item = item
            this.drawChart(ctx)
        })
    }

    async drawChart(ctx) {
        const jsonData = await (await fetch(this.item)).json()
        
        const labels = jsonData.map(v => v.date)
        const lowPriceData = jsonData.map(v => v.lowPrice)
        const highPriceData = jsonData.map(v => v.highPrice)

        document.getElementById('price').innerText = ('최종 평균 가격: ' + ((Number.parseFloat(lowPriceData[lowPriceData.length - 1]) + Number.parseFloat(highPriceData[highPriceData.length - 1])) / 2) + ' 원')
        
        
        const data = {
            labels: labels,
            datasets: [
                {
                    label: '최소 가격 (원)',
                    backgroundColor: 'rgb(75, 137, 220)',
                    borderColor: 'rgb(75, 137, 220)',
                    data: lowPriceData,
                },
                {
                    label: '최대 가격 (원)',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: highPriceData,
                }
            ]
        }
    
        const config = {
            type: 'line',
            data: data,
            options: { }
        }
        this.myChart = new Chart(ctx, config)
    }

    /**
     * 웹 사이트 다크 모드, 라이트 모드 변경
     * @param {boolean} dark 
     */
    changeTheme(dark) {
        let themeColors = { '--bg': '#0f1421', '--btn': '#272b38', '--txt': '#cfcfcf', '--border': '#303540', '--section': '#191f2c' }
        if (!dark) themeColors = { '--bg': '#D8DEE9', '--btn': '#D8DEE9', '--txt': '#2E3440', '--border': '#AAB2CD', '--section': '#E5E9F0' }
        const root = document.querySelector(':root')
        for (const key in themeColors) root.style.setProperty(key, themeColors[key])
    }

    isDarkMode() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
}

window.onload = () => new App()