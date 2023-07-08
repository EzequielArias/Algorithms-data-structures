import fs from 'fs'


export const randomizer = (route : string) => {

    const autos : any = fs.readFileSync(route,'utf-8')

    let car = Math.round(Math.random() * 19);
    let data = JSON.parse(autos).autos
    console.log(__dirname)
    return data[car]
}


