const App = {
    data() {
      return {
        drinkItems:[
            {
                itemName: "紅茶",
                englishName:"Black tea",
                price: 30,
                itemNum: 1,
                amountOfIce: "正常冰",
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type: "drink",
            },
            {
                itemName: "綠茶",
                englishName:"Green tea",
                price: 30,
                itemNum: 1,
                amountOfIce: "正常冰",
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "烏龍茶",
                englishName:"Oolang tea",
                price: 40,
                itemNum: 1,
                amountOfIce: "正常冰",
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "珍珠奶茶",
                englishName:"Pearl milk tea",
                price: 50,
                itemNum: 1,
                amountOfIce: "正常冰",
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "紅茶拿鐵",
                englishName:"Milk tea",
                price: 50,
                itemNum: 1,
                amountOfIce: "正常冰",
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "水果茶(冰塊固定)",
                englishName:"Fruit tea",
                price: 60,
                itemNum: 1,
                amountOfIce: '不可調',
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "冬瓜茶(糖度固定)",
                englishName:"Winter Melon tea",
                price: 30,
                itemNum: 1,
                amountOfIce: '正常冰',
                sugarLevel: "不可調",
                topping: [],
                remarks: "",
                type:"drink"
            },
            {
                itemName: "薑母茶(僅限熱飲)",
                englishName:"Ginger tea",
                price: 40,
                itemNum: 1,
                amountOfIce: '不可調',
                sugarLevel: "半糖",
                topping: [],
                remarks: "",
                type:"drink"
            },
        ],
        foodItems:[
            {
                itemName: "炸雞",
                englishName:"Fried chicken",
                price: 45,
                itemNum: 1,
                spicy:"",
                remarks: "",
                type:"food",
            },
            {
                itemName: "薯條",
                englishName:"French fries",
                price: 35,
                itemNum: 1,
                spicy:"",
                remarks: "",
                type:"food",
            },
            {
                itemName: "牛肉漢堡",
                englishName:"Beef burger",
                price: 60,
                itemNum: 1,
                spicy:"",
                remarks: "",
                type:"food",
            },
            {
                itemName: "起司漢堡",
                englishName:"Cheese burger",
                price: 50,
                itemNum: 1,
                spicy:"",
                remarks: "",
                type:"food",
            },
            {
                itemName: "蘋果派",
                englishName:"Apple pie",
                price: 30,
                itemNum: 1,
                spicy:"",
                remarks: "",
                type:"food",
            },
        ],
        totalPrice:0,
        temp:{},
        orderCart:[],
        finalList:[],
        selectedTemp:'',
        orderTime:'',
        iceSelect:["正常冰","少冰","微冰","去冰","熱飲"],
        sugarSelect:["全糖","七分糖","半糖","三分糖","無糖"],
        toppingSelect:["珍珠","仙草","椰果","粉條","粉圓"],
        spicySelect:["大辣","中辣","小辣","不辣"],
        menuSwitch: true,
        
      }
    },
    methods:{
        showDrinkMenu(){
            if(this.menuSwitch === true){
                return
            }
             this.menuSwitch = !this.menuSwitch;
        },
        showFoodMenu(){
            if(this.menuSwitch === false){
                return
            }
             this.menuSwitch = !this.menuSwitch;
        },
        selected(item){
            this.selectedTemp = item.itemName ;
            this.temp = JSON.parse(JSON.stringify(item)); 
        },
        makeOrderCart(){   
            let cartItems = JSON.parse(JSON.stringify(this.temp));
            this.orderCart.push(cartItems);
            this.countPrice();
            this.selectedTemp = "";
            this.temp = [];
        },
        countPrice:function(){
            let countPrice = 0 ;
            for(let i=0; i<this.orderCart.length ; i++){
                let amount = this.orderCart[i].price*this.orderCart[i].itemNum +this.orderCart[i].topping.length*10*this.orderCart[i].itemNum;
                amount = parseInt(amount);
                countPrice += amount
                this.totalPrice = countPrice ;
            }            
        },
        sendOrder(){
            this.finalList = JSON.parse(JSON.stringify(this.orderCart));
            let datetime = new Date();
            datetime = moment(datetime).format('MMMM Do YYYY, h:mm:ss a');
            this.orderTime = datetime;
            this.orderCart = [];
        },
        deleteItems(index){
            this.orderCart.splice(index,1);
            this.countPrice();
        },
        clearTemp(){
            this.selectedTemp = "";
            this.temp = [];
        },
        changeQuantity(e){
            let input = e.target;
            if(input.value <= 1){
              input.value = 1 ;
            }
        }
    }
  }
  
  Vue.createApp(App).mount('#appContainer')