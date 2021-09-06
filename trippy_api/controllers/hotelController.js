const express =require('express');


const hotels= [
    {
		"id": 1,
		"name": "Imperial Hotel",
		"address": "84 av des Champs-Élysées",
		"city": "Paris",
		"country": "France",
		"stars": 5,
		"hasSpa": true,
		"hasPool": true,
		"priceCategory": 3
	},
    {
		"id": 2,
		"name": "The Queen",
		"address": "3 Darwin Street",
		"city": "London",
		"country": "England",
		"stars": 4,
		"hasSpa": true,
		"hasPool": false,
		"priceCategory": 3
	},
	{
		"id": 3,
		"name": "Kiwi land",
		"address": "4587 George St.",
		"city": "Auckland",
		"country": "New-Zealand",
		"stars": 3,
		"hasSpa": false,
		"hasPool": true,
		"priceCategory": 2
	}
]
//hotel list
const getHotels =(_req, res) => {
	res.json({
		status: "OK",
		data: hotels,
	})       
}
//hotel :id
const hotelId =(req, res) => {
    // const parId= parseInt(req.params.id);
    // let hotel1= hotels.find(a => a.id === parId);
    //2nd option:
    parId= req.params.id
        res.json({
            status : 'ok',
            data: hotels[parId -1],
        })
};
// Add a hotel
const addHotel= (req, res) => {
    const addHotel1 = req.body;
    hotels.push(addHotel1);
        res.json({
            status: "OK",
            message: "Hotel added ",
            data: addHotel1,
        });
    }
//put hotel
   const putId =(req,res)=> {

    const name1 =req.query.name;
    const idHotel= req.params.id;

        const hotelId = hotels.findIndex(hotel => hotel.id === parseInt(idHotel));
          
            const hotelIndex= hotels[hotelId+1] ;
            hotelIndex.name= name1;
        
         hotels.splice( hotelId,1,hotelIndex)
           
            res.json({
                status: "ok",
                message: "Hotel name changed",
                data : hotelId
            })
    }
//Delete hotel by id
    const deleteHotel =(req, res) => {

        const idHotel= req.params.id;

    const hotelId = hotels.findIndex(hotel => hotel.id === parseInt(idHotel));
      
      hotels.splice(hotelId, 1);

        res.json({
            status : 'ok',
            message: "hotel name deleted",
            data: hotels
        })
    };
module.exports = {
	getHotels: getHotels,
    hotelId: hotelId,
    addHotel: addHotel,
    deleteHotel: deleteHotel,
    putId: putId,
}