const isEVen = require("./isEven");
const formatDate = require("./formatDate");

test("if the number is an even no.", () => {
	const result = isEVen(4);

	expect(result).toBe(true);
});

test("If the date format is day month year",()=>{
	const result= formatDate("2021-08-16");
	expect(result).toBe("16-08-2021");
	
})