
var vArray = [];

vArray[0] = ["Free-range Kale", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $10.99/lb", "images/kale.jpg"];
vArray[1] = ["Conflict Free Carrots", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $5.99/lb", "images/carrot.jpg"];
vArray[2] = ["Reduced Flavor Onions", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $3.99/lb", "images/onion.jpg"];
vArray[3] = ["Vegetarian Chicken Breast", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $20.99/lb", "images/chicken.jpg"];
vArray[4] = ["Pretentious Juice","Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $8.99/oz", "images/oj.jpg"];
vArray[5] = ["Fat-free Avocados", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $9.99/lb", "images/avocado.jpg"];
vArray[6] = ["Endangered Bee Honey", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: 12.99/oz", "images/honey.png"];
vArray[7] = ["Grass-fed Eggs", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $6.99/dz", "images/egg.jpg"];
vArray[8] = ["Sugar-free Banana", "Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.", "Price: $4.99/lb", "images/banana.jpg"];

var produce = document.getElementById("content");

for (var i = 0; i < vArray.length; i++){
  produce.innerHTML += "<article class='card'> <h2>" + vArray[i][0] + "</h2> <section> <div class='image'><img src='" + vArray[i][3] + "' alt=''></div> <span><p>" + vArray[i][1] + "</p></span></section><section><span><p class='price'>" + vArray[i][2] + "</p></span></section></article>";   
}