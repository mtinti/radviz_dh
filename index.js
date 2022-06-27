// dataset: iris
d3.csv('./data/indata4.csv').then(
	function(data) {
	
	
	const IDtable = document.querySelector('#data-table');//the container of table
	const IDradviz = document.querySelector('#radviz');//the container of radviz
	const titles = d3.keys(data[0]);//titles in the data table
	const colorAccessor = function(d){ return d['class']; };//dimension used for coloring
	console.log(colorAccessor);
	const dimensions = ['<2C', 'G1', 'S', 'G2M', '>4C'];//dimensions used for RadViz.
	const dimensionAnchor = Array.apply(null, 
		{length: dimensions.length}).map(Number.call, Number).map(x=>x*2*Math.PI/(dimensions.length)); // intial DA configration;
	
	console.log('index.js:titles', titles);
	//console.log('index.js:colorAccessor', colorAccessor);
	//console.log('index.js:dimensions', dimensions);
	//console.log('index.js:dimensionAnchor', dimensionAnchor);
	
	// call the plot function
	RadViz()
		.DOMTable(IDtable)
		.DOMRadViz(IDradviz)
		.TableTitle(titles)
		.ColorAccessor(colorAccessor)
		.Dimensionality(dimensions)
		.DAnchor(dimensionAnchor)
		.DATA(data)
		.call();
}); 
