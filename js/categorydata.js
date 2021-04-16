axios.get("http://localhost:8081/categorydata").then(res => {
    var categorydata = new Array()
    categorydata = res.data
    console.log(categorydata[0][0]);
})