function textResult()
{
	let text = document.querySelector('.str').value;
	let upStr = text.toUpperCase()
	let firstStr = upStr[0].toLowerCase()

	let nextStr = firstStr + upStr.slice(1)

	alert(nextStr)
}

function crashResult()
{
	for(let i = 0; i < 10; i--) 
		{
  			console.log(i);
		}
}
	
