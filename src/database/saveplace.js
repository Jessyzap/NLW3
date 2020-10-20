function saveplace(db, place) {
  return db.run(`       
        INSERT INTO places (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "${place.lat}",
            "${place.lng}",
            "${place.name}",
            "${place.about}",
            "${place.whatsapp}",
            "${place.images}",
            "${place.instructions}",
            "${place.opening_hours}",
            "${place.open_on_weekends}"            
        );
    `);
}

module.exports = saveplace;
