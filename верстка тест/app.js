




new Vue({
    el: '#app',
    data: {
            cards: [
                { img:'img/Rectangle 31.png', name:'Наименование товара ', description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 12 000 руб.'},
                { img:'img/Rectangle 31.png', name:'Наимеование товара ',description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 15 000 руб.'},
                {  img: 'img/Rectangle 31.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 10 000 руб.'},
                { img: 'img/Rectangle 31.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 11 000 руб.'},
                { img: 'img/Rectangle 31.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 10 000 руб.'},
                { img: 'img/Rectangle 31.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 14 000 руб.'}],

            Name:'',
            Description:'',
            image: '',
            Price: '',
            reminder1: false,
            default1:true,
            default2:true,
            default3:true,
            reminder2: false,
            reminder3: false,
            NoActiveBox: true,
            ActiveBox: false,
            select: '1',
            options:[
                { text:'По умолчанию', value:1},
                { text:'По цене max', value:2},
                { text:'По цене min', value:3}
            ]

        },

    methods:{
        DescriptionValue(event)
        {
            this.Description = event.target.value;
            
        },
        NameValue(event)
        {
            this.Name = event.target.value;
           
            
        },
        imageValue(event)
        {
            this.image = event.target.value;
            
            
        },
        PriceValue(event)
        {
            this.Price = event.target.value;
            
        },
  
        addPost(){
            if((this.Name && this.image && this.Price) != '')
            {
                const newCard = {
                    img: this.image,
                    name: this.Name,
                    description: this.Description,
                    price: this.Price
                }
                this.cards.push(newCard);

            }
            
            if(this.Name == '')
                {
                    this.reminder1 = true;
                    this.default1 = false;

                }   
            if(this.image == '')
                {
                    this.reminder2 = true; 
                    this.default2 = false;
                    
                }
            if(this.Price == '')
                {
                    this.reminder3 = true; 
                    this.default3 = false;
                }
        },
                
            
                
 
        delCard: function(index){
            this.$delete(this.cards,index)

        },


        




    },

    










})