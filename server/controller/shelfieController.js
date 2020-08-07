module.exports = {
    getShelfies: (req, res) => {
        const db = req.app.get('db')
        db.get_shelfies().then(shelfies => {
            res.status(200).send(shelfies)
        })
    }, 

    addShelfie: (req, res) => {
        const db = req.app.get('db')
        const {shelfie_image, description, price} = req.body
        db.add_Shelfie([shelfie_image, description, price]).then(shelfie => {
            res.status(200).send(shelfie)
        })
    }
}