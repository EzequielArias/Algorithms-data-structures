import * as fs from 'fs'

interface Person{
    name : string,
    lastName : string
    email : string,
    nickName : string[] | string
}

class People {
    content : Object[]

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

    update(name : string,data : Person, filename : string):string | Object{
        let mod = this.read(filename)

        this.content = mod

        let i = this.content.findIndex(el => el["name"] === name)

        this.content[i]["name"] = name
        this.content[i]["email"] = data.email
        this.content[i]["lastName"] = data.lastName
        this.content[i]["nickName"] = data.nickName

        fs.writeFileSync(filename,JSON.stringify(this.content))
        
        return `el usuario ${name} fue actualizado correctamente`
    }

    delete(name : string, filename : string):string {
        let mod = this.read(filename)

        this.content = mod

        let dataWithItemEliminated = this.content.filter(el => el["name"] !== name)

        fs.writeFileSync(filename,JSON.stringify(dataWithItemEliminated))
        return `El elemento con el nombre ${name} fue eliminado correctamente`
    }
}

const teo = new People()
//console.log(teo.read('./data.json'))
//console.log(teo.create({name : "Poo", lastName : "Fideos", email : "Poo@gmail.com",nickName : "Guerrero dragon"},'./data.json'))
/*teo.update('Poo',
{name : "Cheguevara",
 email : "eze@gmail.com",
  lastName : "montoto",
   nickName : "crijav"}
   ,'./data.json')*/
   console.log(teo.delete('Poo','./data.json'))