class App {

    constructor() {

        if (this.isDarkMode()) this.changeTheme(true)

        
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