function dataHandler() {
	fetch("./data.json")
		.then((res) => {
			return res.json();
		})
		.then((result) => {
			let data = result;

			data.map((subData, i) => {
				document.getElementById("big-list").innerHTML += `
        <ul class="main-list">
        <li>id:${data[i].id}</li>
         <li>site Name:${data[i].name}</li>
        <li>site Url:<a href="${data[i].url}">${data[i].name}</a></li>
        <ul class="list-sub"><li>${getData(subData)}</li></ul>
        </ul> `;
			});
		});
}
dataHandler();

function getData(data) {
	if (data.subData) {
		return data.subData.map(
			(arr, i) =>
				` 
             <ul class="list-sub-${i}">
            <li>id:${arr.id}</li>
                        <li>Site Name:${arr.name}</li>
                        <li>Site Url:<a href="${arr.url}">${
					arr.name
				}</a></li></ul>
                        <ul class="list-${i}">${getData(arr)}</ul>  
             `
		);
	} else {
		return [];
	}
}
