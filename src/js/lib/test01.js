export default function test01(){
	const item = document.querySelectorAll(".js-item")
	const itemLength = item.length
	console.log(itemLength)
	for (let i = 0; i < itemLength; i++){
		item[i].addEventListener('click', function(){
			this.classList.toggle('active')
		})
	}
}


