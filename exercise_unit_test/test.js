const isEven = require("./isEven");
const formatDate = require("./formatDate");

test("if the number is an even no.", () => {
	const result = isEven('12');
	expect(result).toBe(true);
});

var date_regex =/^\d{1,2}\-\d{1,2}\-\d{4}$/; 

test("If the date format is day month year",()=>{
	const result= formatDate("2014-05-14");
	expect(result).toMatch(date_regex);
})

