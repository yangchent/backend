const express =require('express');
const restaurants =
[
	{
		"id": 1,
		"name": "Les trois Mousquetaires",
		"address": "22 av des Champs-Élysées",
		"city": "Paris",
		"country": "France",
		"stars": 4,
		"cuisine": "french",
		"priceCategory": 3
	},
	{
		"id": 2,
		"name": "The Fat Guy",
		"address": "47 Jackson Boulevard",
		"city": "New York",
		"country": "US",
		"stars": 5,
		"cuisine": "burger",
		"priceCategory": 1
	},
	{
		"id": 3,
		"name": "Veggies",
		"address": "77 Avenir Street",
		"city": "Sydney",
		"country": "Australia",
		"stars": 5,
		"cuisine": "vegan",
		"priceCategory": 2
	}
];
//Restaurant list
const getRestaurants =(_req, res) => {
	res.json({
		status: "OK",
		data: restaurants
	})       
}
//restaurant :id
const restaurantId =(req, res) => {
    // const parId= parseInt(req.params.id);
    // let restau1= restaurants.find(a => a.id === parId);
    //2nd option:
    parId= req.params.id
        res.json({
            status : 'ok',
            data: restaurants[parId -1],
        })
};
// Add a restaurant
const addRestaurant= (req, res) => {
    const addRes = req.body;
    restaurants.push(addRes);
        res.json({
            status: "OK",
            message: "Hotel added ",
            data: addRes,
        });
    }
//put restaurant
   const putId =(req,res)=> {

    const name1 =req.query.name;
    const idRestau= req.params.id;

        const resId = restaurants.findIndex(restaurant => restaurant.id === parseInt(idRestau));
          
            const resIndex= restaurants[resId+1] ;
            resIndex.name= name1;
        
         hotels.splice( resId,1,resIndex)
           
            res.json({
                status: "ok",
                message: "Restaurant name changed",
                data : resId
            })
    }
//Delete Restaurant by id
    const deleterestaurant =(req, res) => {

        const idRes= req.params.id;

    const restaurantId = restaurants.findIndex(rest => rest.id === parseInt(idRes));
      
      restaurants.splice(restaurantId, 1);

        res.json({
            status : 'ok',
            message: "Restaurant name deleted",
            data: restaurants
        })
    };



module.exports = {
	getRestaurants: getRestaurants,
    restaurantId: restaurantId,
    addRestaurant: addRestaurant,
	putId: putId,
    deleterestaurant: deleterestaurant,
}