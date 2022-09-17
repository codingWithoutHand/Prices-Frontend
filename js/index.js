class App {

    constructor() {
        if (this.isDarkMode()) this.changeTheme(true)

        const ctx = document.getElementById('chart').getContext('2d')
        this.drawChart(ctx)
    }

    drawChart(ctx) {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ]
    
        const data = {
            labels: labels,
            datasets: [{
                label: 'd',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        }
    
        const config = {
            type: 'line',
            data: data,
            options: { }
        }
        const myChart = new Chart(ctx, config)
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