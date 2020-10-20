const Database = require('./database/db');
const saveplace = require('./database/saveplace');

module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index')
    },

    async place(req, res) {

        const id = req.query.id;

        try {
            const db = await Database;            
            const results = await db.all(`SELECT * FROM places WHERE id='${id}'`)
            const place = results[0]

            place.images = place.images.split(",")
            place.firstImage = place.images[0]

            if(place.open_on_weekends == "0") {
                place.open_on_weekends = false
            } else {
                place.open_on_weekends = true
            }
                       
            // const open = (place.open_on_weekends == "1") ? true : false;

            return res.render('place', { place }) 
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },

    async places(req, res) {
        // colocar o place pelo banco
        try {
            const db = await Database;            
            const places = await db.all("SELECT * FROM places")
            return res.render('places', { places }) 
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }
    },       

    createplace(req, res) {
        return res.render('create-place')
    },

    async saveplace(req, res) {
        const fields = req.body        

        // validar se todos os campos estão preenchidos        
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos')
        }

        try {
            // salvar um orfanato
            const db = await Database
            await saveplace(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            })

            // redirecionamento
            return res.redirect('/places')
        } catch(error) {
            console.log(error)
            return res.send('Erro no banco de dados')
        }        
    },
}
    

   

