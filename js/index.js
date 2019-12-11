
const productData = [
    {
        id: 1,
        name: "Cappuccino",
        image: "img/Cappuccino.png",
        description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
        price: "5.20",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        suger: true,
        ratings: 5,
        fav:true
    },
    {
        id: 2,
        name: "Brewed Coffees",
        image: "img/BrewedCoffees.png",
        description: "A one-to-one mix of fresh brewed coffee and steamed milk add up to one distinctly delicious coffee drink.",
        price: "1.90",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        foam: ["Extra Foam", "Light Foam", "No Foam", "Foam"],
        ratings: 4
    },
    {
        id: 3,
        name: "Chai Tea",
        image: "img/ChaiTea.png",
        description: "Black tea infused with warm clove, cardamom, cinnamon & ginger notes.",
        price: "1.90",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        powders: ["Chocolate", "Chocolate", "Nutmeg"],
        ratings: 3
    },
    {
        id: 4,
        name: "Iced Caffè Americano",
        image: "img/IcedCaffèAmericano.png",
        description: "Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance. . Pro Tip: For an additional boost, ask your barista to try this with an extra shot.",
        price: "2.30",
        suger: true,
        ice: ["No Ice", "Light", "Ice", "Extra Ice"],
        ratings: 5
    },
    {
        id: 5,
        name: "Iced Black Tea",
        image: "img/IcedBlackTea.png",
        description: "Awaken your taste buds with the zing of refreshing lemonade; a light, tangy, fresh sip that puts a little zip in your step.",
        price: "2.10",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        water: ["Light Water", "Water", "Extra Water"],
        juice: ["Apple Juice", "Peach Juice"],
        ratings: 4
    },
    {
        id: 6,
        name: "Cold Milk",
        image: "img/ColdMilk.png",
        description: "Skim, 2%, whole, soy, almond, or coconut beverage served chilled or over ice. Simply refreshing.",
        price: "1.30",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        sauce: true,
        ratings: 3
    },
    {
        id: 7,
        name: "Irish Cream Cold Brew",
        image: "img/IrishCreamColdBrew.png",
        description: "DCold Brew with Irish cream syrup, topped with vanilla sweet cream cold foam and a strike of cocoa powder.",
        price: "5.70",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        drizzle: ["Caramel", "Mocha"],
        ratings: 5
    },
    {
        id: 8,
        name: "Lemonade",
        image: "img/Lemonade.png",
        description: "Awaken your taste buds with the zing of refreshing lemonade; a light, tangy, fresh sip that puts a little zip in your step.",
        price: "3.70",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        whippedCream: ["Extra Whipped", "Light Whipped", "No Whipped", "Whipped"],
        ice: ["No Ice", "Light", "Ice", "Extra Ice"],
        ratings: 4
    },
    {
        id: 9,
        name: "Blended Strawberry Lemonade",
        image: "img/BlendedStrawberryLemonade.png",
        description: "Awaken your taste buds with the zing of refreshing lemonade infused with a hint of delicious strawberry flavour and blended with ice. A light,  that puts a little zip in your step.",
        price: "4.80",
        sizes: ["Venti", "Grande", "Tall", "Short"],
        ice: ["No Ice", "Light", "Ice", "Extra Ice"],
        juice: ["Apple Juice", "Peach Juice", "Gauva Juice"],
        ratings: 4
    },
    {
        id: 10,
        name: "Evolution Fresh®",
        image: "img/EvolutionFresh.png",
        description: "A naturally refreshing and hydrating juice with just a touch of lemon, our fruit is picked at its absolute peak of sweetness then cold-pressed for maximum flavour and nutrients. 100% juice with no added sweeteners or artificial flavours.",
        price: "5.80",
        otherSize: ["325ml", "225ml", "125ml"],
        falours: ["Watermelon", "Organic Defence Up", "Organic Super Fruit Greens"],
        ratings: 4
    },
]


function addProducts() {
    let container = document.getElementById("products");
    let html = "";
    for (let item of productData) {
        let favHtml = `<a class="fav"  onclick="bindFav('fav_${item.id}')"><img id="fav_${item.id}" src="img/nofav.png"></a>`;
        if(item.fav){
            favHtml = `<a class="fav" onclick="bindFav('fav_${item.id}')"><img id="fav_${item.id}"  src="img/fav.png"></a>`;
        }

        html +=
            `
        <li id=${item.id}>
        <div>
            <h3>${item.name}</h3>
            <div class="img"><img src=${item.image}></div>
            <p>${item.description}</p>
            ${favHtml}
        </div>
        <p class="price">C$${item.price}</p>
        <form>
        `


        if (item.sizes) {
            let itemHtml = "";
            for (let sItem of item.sizes) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="size" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>SIZE</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.suger) {
            html +=
                `
            <div class="item suger">
                <label>SUGER</label>
                <div class="suger-a">
                    <a onclick="reduce('suger_${item.id}')"><img src="img/reduce.png"></a>
                    <a onclick="add('suger_${item.id}')"><img src="img/add.png"></a>
                </div>
                <p class="suger-p"><span id="suger_${item.id}">1</span> packet(s) Sugar</p>
            </div>
            `
        }


        if (item.powders) {
            let itemHtml = "";
            for (let sItem of item.powders) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="powders" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>POWDERS</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.ice) {
            let itemHtml = "";
            for (let sItem of item.ice) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="ice" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>ICE</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.water) {
            let itemHtml = "";
            for (let sItem of item.water) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="water" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>WATER</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.juice) {
            let itemHtml = "";
            for (let sItem of item.juice) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="juice" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>JUICE</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }
        if (item.sizt) {
            let itemHtml = "";
            for (let sItem of item.sizt) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="sizt" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>SIZT</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.sauce) {
            html +=
                `
            <div class="item suger">
                <label>SAUCE</label>
                <div class="suger-a">
                    <a onclick="reduce('sauce_${item.id}')"><img src="img/reduce.png"></a>
                    <a onclick="add('sauce_${item.id}')"><img src="img/add.png"></a>
                </div>
                <p class="suger-p"><span id="sauce_${item.id}">4</span> pump(s) Caramel Sauce</p>
            </div>
            `
        }

        if (item.drizzle) {
            let itemHtml = "";
            for (let sItem of item.drizzle) {
                itemHtml +=
                    `
                <li><label><input type="checkbox" name="drizzle" value=${sItem}> <span>${sItem}</span></label></li>
                `
            }

            html +=
                `
            <div class="item">
                <label>DRIZZLE</label>
                <ul>${itemHtml}
                </ul>
            </div>
            `
        }

        if (item.foam) {
            let itemHtml = "";
            for (let sItem of item.foam) {
                itemHtml +=
                    `
                <option>${sItem}</option>
                `
            }

            html +=
                `
            <div class="item foam">
                <label>FOAM</label>
                <select>${itemHtml}
                </select>
            </div>
            `
        }

        if (item.whippedCream) {
            let itemHtml = "";
            for (let sItem of item.whippedCream) {
                itemHtml +=
                    `
                <option>${sItem}</option>
                `
            }

            html +=
                `
            <div class="item foam">
                <label>WHIPPED CREAM</label>
                <select>${itemHtml}
                </select>
            </div>
            `
        }
        if (item.otherSize) {
            let itemHtml = "";
            for (let sItem of item.otherSize) {
                itemHtml +=
                    `
                <option>${sItem}</option>
                `
            }

            html +=
                `
            <div class="item othersize">
                <label>SIZE</label>
                <select>${itemHtml}
                </select>
            </div>
            `
        }

        if (item.falours) {
            let itemHtml = "";
            for (let sItem of item.otherSize) {
                itemHtml +=
                    `
                <option>${sItem}</option>
                `
            }

            html +=
                `
            <div class="item othersize">
                <label>FALOURS</label>
                <select>${itemHtml}
                </select>
            </div>
            `
        }

        if (item.ratings) {
            let ratingHtml = "";
            let emptyStar = 5 - item.ratings;
            for (let i = 0; i < item.ratings; i++) {
                ratingHtml +=
                    `
                <li><img class="star" src="img/star.png"></li>
                `
            }
            if (emptyStar > 0) {
                for (let i = 0; i < emptyStar; i++) {
                    ratingHtml +=
                        `
                    <li><img src="img/star-empty.png"></li>
                    `
                }
            }

            html +=
                `
            </form> 
            <div class="ratings">
                <ul>${ratingHtml}
                </ul>
            </div>
           
            `
        }



        html +=
            `
        <p><a href="javascript:;" class="add">Add to Order</a></p>
      </li>
        `
    }
    container.innerHTML = html
}

function bindFav(id){
    let dom = document.getElementById(id);
    let src = dom.src;
    if(src.indexOf("nofav") != -1){
        dom.src = "img/fav.png"
    }else{
        dom.src = "img/nofav.png"
    }
   
}

function reduce(id){
    let dom = document.getElementById(id)
    let num = dom.innerText;
    if(num > 0){
        num --;
    }
    dom.innerText = num;
}

function add(id){
    let dom = document.getElementById(id)
    let num = dom.innerText;
    num ++;
    dom.innerText = num;
}

window.onload = function () {
    addProducts();
}
