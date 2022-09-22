const fs = require('fs')

async function main() {
    makeJSON('./data/news/rice.csv')
    makeJSON('./data/news/gasoline.csv')
    makeJSON('./data/news/sweet_potato.csv')
}

async function makeJSON(txt) {
    let txtData = await fs.readFileSync(txt, 'utf8')

    const data = []
    txtData = txtData.toString().split('\n')
    for (let i in txtData) {
        const array = txtData[i].split(',')
        const article = array[1]
        const date = array[3]
        const link = array[4]

        data.push({
            date: date,
            article: article,
            link: link
        })
    }
    fs.writeFileSync(txt.replaceAll('.csv', '.json'), JSON.stringify(data))
}

main()