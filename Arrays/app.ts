import * as fs from 'fs'

interface Person{
    name : string,
    lastName : string
    email : string,
    nickName : string[] | string
}

class People {


    create( newClient : Person, filename : string):Person{

        let newPerson = this.read(filename)

        let arr = JSON.stringify([...newPerson,newClient])

        fs.writeFileSync(filename,arr)

        return newClient 
    }

    read(filename : string) :Object[] {
        // Probamos en leer y devolver los datos dentro de un array
        let data = fs.readFileSync(filename,'utf-8')

        return JSON.parse(data)
    }

    update(name : string,data : Person, filename : string):string{
        let index = this.read(filename)
        for (let i = 0; i < index.length; i++) {
            console.log("#######################")
            console.log(index[i])            
        }
        return ''
    }

    //delete(id):string{}
}

const teo = new People()
//console.log(teo.read('./data.json'))
//console.log(teo.create({name : "Poo", lastName : "Fideos", email : "Poo@gmail.com",nickName : "Guerrero dragon"},'./data.json'))
teo.update('Poo',
{name : "Cheguevara",
 email : "eze@gmail.com",
  lastName : "montoto",
   nickName : "crijav"}
   ,'./data.json')