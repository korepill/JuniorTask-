new Vue({
    el: '#app',
    data: {
            cards: [
                { img:'img/Card.png', name:'Наименование товара ', description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 12 000 руб.'},
                { img:'img/Card.png', name:'Наимеование товара ',description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 15 000 руб.'},
                {  img: 'img/Card.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 10 000 руб.'},
                { img: 'img/Card.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 11 000 руб.'},
                { img: 'img/Card.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 10 000 руб.'},
                { img: 'img/Card.png',name: 'Наимеование товара ',description:' Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк'
                    ,price:' 14 000 руб.'}],

            Name:'',
            Description:'',
            image: '',
            Price: '',
            reminder1: false,
            reminder2: false,
            reminder3: false,
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
            if(this.Name != ''){
                this.reminder1 = false; 
                console.log(this.reminder1)
            }
        },
        imageValue(event)
        {
            this.image = event.target.value;
            if(this.image != ''){
                this.reminder2 = false; 
                console.log(this.reminder2)
            }
        },
        PriceValue(event)
        {
            this.Price = event.target.value;
            if(this.Price != ''){
                this.reminder3 = false; 
                console.log(this.reminder3)
            }
        },

  
        addPost(){
            if(this.Name == '')
                {
                    this.reminder1 = true;
                }
            if(this.image == '')
                {
                    this.reminder2 = true; 
                }
            if(this.Price == '')
                {
                    this.reminder3 = true; 
                }

            if((this.Name && this.image && this.Price) != '')
            {
                const newCard = {
                    img: this.image,
                    name: this.Name,
                    description: this.Description,
                    price: this.Price
                }
                this.cards.push(newCard);
                this.Name ='',
                this.Description ='',
                this.image = '',
                this.Price = '' 
            }   
        },
                
        delCard: function(index){
            this.$delete(this.cards,index)

        },
    },

    computed: {
        ActiveBox(){
            return (this.Name && this.image && this.Price && this.Description);
        },
    },
})