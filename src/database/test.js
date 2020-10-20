const Database = require('./db');
const saveplace = require('./saveplace');

Database.then(async db => {    
    //inserir dados na tabela
    // await saveplace(db, {            
    //         lat: "-27.222633", 
    //         lng: "-49.6555874",
    //         name: "Lar dos Meninos",            
    //         about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //         whatsapp: "8874545474",
    //         images: [    
    //             "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    
    //             "https://images.unsplash.com/photo-1574350518720-d92affb18bee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    //         ].toString(),
    //         instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //         opening_hours: "Horário de visitas Das 8h até 18h",
    //         open_on_weekends: "0"        
    // })      

//     // consultar dados da tabela
//     const selectedplaces = await db.all("SELECT * FROM places")
//     console.log(selectedplaces)

// //     // consultar somente 1 orfanato pelo id
//     const place = await db.all('SELECT * FROM places WHERE id = "3"')
//     console.log(place)

    // deletar dado da tabela
    console.log(await db.run('DELETE FROM places WHERE id ="2"'))

//     // deletar tudo
//     console.log(await db.run('DELETE FROM places'))
//await db.run('DELETE FROM places WHERE id >"0" = apaga todos
})