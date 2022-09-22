const fs = require('fs')

async function main() {
    makeJSON('./data/rice.txt')
    makeJSON('./data/gasoline.txt')
    makeJSON('./data/sweet_potato.txt')
}

async function makeJSON(txt) {
    let txtData = await fs.readFileSync(txt, 'utf8')

    const data = []
    txtData = txtData.toString().split('\n')
    for (let i in txtData) {
        const array = txtData[i].split(',')
        const date = array[1]
        const rowPrice = array[2]
        const highPrice = array[3]
        data.push({
            date: date,
            lowPrice: rowPrice,
            highPrice: highPrice
        })
    }
    fs.writeFileSync(txt.replaceAll('.txt', '.json'), JSON.stringify(data))
}

main()