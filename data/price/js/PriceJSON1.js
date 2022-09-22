const fs = require('fs')

async function main() {
    makeJSON('./data/price/rice.txt')
    makeJSON('./data/price/gasoline.txt')
    makeJSON('./data/price/sweet_potato.txt')
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

        if (txt === './data/price/rice.txt') {
            data.push({
                date: date,
                lowPrice: rowPrice
            })
        } else {
            data.push({
                date: date,
                lowPrice: rowPrice,
                highPrice: highPrice
            })
        }
    }
    fs.writeFileSync(txt.replaceAll('.txt', '.json'), JSON.stringify(data))
}

main()