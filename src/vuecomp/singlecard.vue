<template>

    <div v-getel  :class="cdentityclass" v-on="{mouseenter:choose,mouseleave:unchoose}">
        <div class="boxwrapper">
            <div class="box">
                <div  :style="cardpropsobj.cdstyleurl" class="cardimgclass">
                    <h1 :class="brandclass" v-text="cardpropsobj.id" style="color: rgba(255,255,255,0.80);font-size: 4rem;display: block;width: 100%;text-align: center;height: 0;padding-top: 20%;opacity: 0"></h1>
                </div>
                <div class="card-body">
                    <h4 class="card-title" v-text="cardpropsobj.cdtitle"></h4>
                    <p class="card-text" v-text="cardpropsobj.description"></p>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    var cardoft ,clienth,ccd,cardheight;
    var flag = 0;

    export default {
        mounted: function(){
            // console.log('mounted函数执行了');
            clienth = window.innerHeight;
            ccd = cardoft - clienth;
            // console.log(ccd);
            window.addEventListener('scroll',this.scrollhandler,true);
        },

        name:'Singlecard',
        data: function () {
            return {
                cdentityclass : ['card','cardentity'],
                brandclass : ['brandh1'],
                tests: 'hello',
                total: this.cardstotal
            }
        },
        props: ['cardpropsobj','cardstotal'],
        directives: {
          getel : {
              inserted: function (el) {
                  cardheight = el.clientHeight;
                  cardoft = el.offsetTop;
              },
          }
        },
        methods: {

            choose(){
                var ind = this.cdentityclass.indexOf('cardshadow_rev');
                if( ind > -1){
                    this.cdentityclass.splice(ind,1);
                    this.cdentityclass.push('cardshadow');
                }else{
                    this.cdentityclass.push('cardshadow');
                }
            },
            unchoose(){
                var ind = this.cdentityclass.indexOf('cardshadow');
                if( ind > -1 ){
                    this.cdentityclass.splice(ind , 1);
                    this.cdentityclass.push('cardshadow_rev');
                }else{
                    this.cdentityclass.push('cardshadow_rev');
                }
            },
            scrollhandler(){

                // console.log(cardoft,clienth,ccd)
                if(ccd > 0 && flag < this.total){
                    if(window.scrollY > (ccd - cardheight*0.88)){
                        this.brandclass.push('fade-in');
                        flag++;
                    }
                }
            }
        },

    }
</script>

<style scoped>

    div{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .boxwrapper{
        margin: 5px 0 0 0;
    }
    .box{
        width: 100%;
        padding: 0 5px;
    }
    .cardimgclass {
        width: 100%;
        height: 0;
        padding-bottom: 75%;
        background-repeat: no-repeat;
        background-position: center center;
    }
    .cardshadow {
        animation : ishadow 0.8s ;
        animation-fill-mode : forwards
    }
    .cardshadow_rev{
        animation-name: ishadowd;
        animation-duration: 0.66s;
        animation-fill-mode : forwards
    }
    @keyframes ishadowd{
        0% {
            box-shadow: 3px 4px 10px rgba(0, 0, 0,0.233)
        }
        100% {
            box-shadow: 0 0 0 rgba(0, 0, 0,0)
        }
    }

    @keyframes ishadow{
        0% {
            box-shadow: 0 0 0 rgba(0, 0, 0,0)
        }
        100% {
            box-shadow: 3px 4px 10px rgba(0, 0, 0,0.233)

        }
    }
    .brandh1{
        color: rgba(255,255,255,0.80);
        font-size: 4rem;
        display: block;
        width: 100%;
        text-align: center;
        height: 0;
        padding-top: 20%;
        opacity: 0;

    }
    .fade-in{
        animation: fadein 1.6s;
        animation-fill-mode: forwards;
    }
    @keyframes fadein{
        0% {
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @media screen and (max-width: 768px){
        .cardentity{
            width: 100%;
            margin: 1% 1%;
        }
    }

    @media screen and (min-width: 768px){
        .cardentity{
            width: 48%;
            margin: 1% 1%;
        }
    }

    @media screen and (min-width: 992px){
        .cardentity{
            width:31%;
            margin: 1% 1%;
        }
    }


</style>