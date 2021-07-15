
const container=document.querySelector(".app");

const myApp=[
              { 
               type:" INICIAIS ",
               msg:" ",
               path:"images/letraG",
               structure:[
                           {question:"GA",options:['GULOSEIMAS.jpg','GOLFE.jpg','GIGANTE.jpg','GALINHA.jpg'],key:3},

                           {question:"GA",options:['GIRAFA.jpg','GATO.jpg','GELATINA.jpg' ,'GIRASSOL.jpg'],key:1},

                           {question:"GI",options:['GIZ.jpg','GORILA.jpg','GOTA.jpg','GARFO.jpg'],key:0},
 
                           {question:"GA",options:['GELEIA.jpg','GOLFINHOS.jpg','GALO.jpg','GIGANTE.jpg'],key:2},
                     
                           {question:"GÊ",options:['GOIABA.jpg' ,'GULOSEIMAS.jpg','GARRAFA.jpg','GENIO.jpg'],key:3},

                           {question:"GA",options:['GAVETAS.jpg' ,'GINASTICA.jpg','GEMEAS.jpg','GELADEIRA.jpg'],key:0},
                              
                           {question:"GI",options:['GANGORRA.jpg','GOLA.jpg','GILETE.jpg','GELO.jpg'],key:2},
                              
                           {question:"GA",options:['GINCANA.jpg','GAIVOTA.jpg','GELEIA.jpg','GIRASSOL.jpg'],key:1},
                            
                           {question:"GE",options:['GOLFE.jpg','GAVIAO.jpg','GAVETAS.jpg','GELO.jpg'],key:3},

                           {question:"GA",options:['GARCA.jpg','GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg'],key:0},   
                              
                           {question:"GU",options:['GOTA.jpg','GOLEIRO.jpg','GULOSEIMAS.jpg','GOLFE.jpg'],key:2},

                           {question:"GE",options:['GIGANTE.jpg','GELATINA.jpg','GIZ.jpg','GIRAFA.jpg'],key:1},

                           {question:"GA",options:['GELEIA.jpg','GINASTICA.jpg','GELADEIRA.jpg','GAIOLA.jpg'],key:3},
                           
                           {question:"GÊ",options:['GEMEAS.jpg','GARAGEM.jpg','GOLFE.jpg', 'GIRASSOL.jpg',],key:0},

                           {question:"GA",options:['GORILA.jpg','GOLFE.jpg','GARRAFA.jpg','GEMA.jpg'],key:2},

                           {question:"GA",options:['GEMA.jpg','GINCANA.jpg','GIZ.jpg','GALHO.jpg'],key:3},

                           {question:"GO",options:['GOLFE.jpg','GULOSEIMAS.jpg','GIRAFA.jpg','GANGORRA.jpg'],key:0},                           

                           {question:"GA",options:['GELO.jpg','GANSO.jpg','GEMA.jpg','GILETE.jpg'],key:1},
                              
                           {question:"GE",options:['GINCANA.jpg','GAVETAS.jpg','GELEIA.jpg' ,'GOMA.jpg'],key:2},
 
                           {question:"GA",options:['GANGORRA.jpg','GOLFE.jpg','GORILA.jpg','GIRASSOL.jpg'],key:0},

                           {question:"GI",options:['GARAGEM.jpg','GELEIA.jpg','GOLFE.jpg', 'GIRAFA.jpg'],key:3},

                           {question:"GA",options:['GORILA.jpg','GAROTO.jpg','GULOSEIMAS.jpg','GINASTICA.jpg'],key:1},

                           {question:"GO",options:['GAIOLA.jpg','GALO.jpg','GOIABA.jpg','GALINHA.jpg'],key:2},
                              
                           {question:"GI",options:['GINASTICA.jpg','GELADEIRA.jpg','GELATINA.jpg','GELEIA.jpg'],key:0},
                              
                           {question:"GO",options: ['GULOSEIMAS.jpg', 'GORILA.jpg','GARFO.jpg','GARRAFA.jpg'],key:1},

                           {question:"GA",options:['GELADEIRA.jpg','GINCANA.jpg','GIRAFA.jpg','GALOCHA.jpg'],key:3},

                           {question:"GO",options:['GANGORRA.jpg','GILETE.jpg','GOLEIRO.jpg','GEMA.jpg'],key:2},
                               
                           {question:"GA",options:['GAVIAO.jpg','GOLFE.jpg','GOTA.jpg','GULOSEIMAS.jpg'],key:0},
                              
                           {question:"GO",options:['GELATINA.jpg','GOLFINHOS.jpg','GULOSEIMAS.jpg' ,'GELADEIRA.jpg'],key:1},

                           {question:"GA",options:['GOMA.jpg','GIRASSOL.jpg','GARAGEM.jpg','GINCANA.jpg'],key:2},

                           {question:"GI",options:['GOTA.jpg','GAVETAS.jpg','GAVIAO.jpg','GIRASSOL.jpg'],key:3},

                           {question:"GÊ",options:['GENIO.jpg','GIRAFA.jpg','GINCANA.jpg','GALHO.jpg'],key:0},
                             
                           {question:"GO",options:['GALINHA.jpg','GOTA.jpg','GULOSEIMAS.jpg','GEMEAS.jpg'],key:1},

                           {question:"GA",options:['GENIO.jpg','GEMA.jpg','GOLFE.jpg','GAMBA.jpg'],key:3},
                              
                           {question:"GE",options:['GIRASSOL.jpg','GOIABA.jpg','GELADEIRA.jpg','GIGANTE.jpg'],key:2},

                           {question:"GA",options:['GAROTA.jpg','GIGANTE.jpg','GIRASSOL.jpg','GELO.jpg'],key:0},
                           
                           {question:"GI",options:['GIGANTE.jpg','GOMA.jpg','GENIO.jpg','GEMA.jpg'],key:0},

                           {question:"GA",options:['GINCANA.jpg','GEMEAS.jpg','GAFANHOTO.jpg','GOMA.jpg'],key:2},
                             
                           {question:"G0",options:['GOMA.jpg','GULOSEIMAS.jpg','GAVETAS.jpg','GAVIAO.jpg'],key:0},
                             
                           {question:"GA",options:['GELO.jpg','GIRAFA.jpg','GORILA.jpg','GARCONETE.jpg'],key:3},

                           {question:"GO",options:['GANGORRA.jpg','GOLA.jpg','GAROTA.jpg','GAROTO.jpg'],key:1},

                           {question:"GE",options:['GILETE.jpg','GARFO.jpg','GEMA.jpg','GARRAFA.jpg'],key:2},
                              
                           {question:"GI",options:['GINCANA.jpg','GORILA.jpg','GOMA.jpg','GOLA.jpg'],key:0},

                           {question:"GA",options:['GOLA.jpg','GENIO.jpg','GULOSEIMAS.jpg','GARFO.jpg'],key:3}


                          ]
              },

              { 
                   type:" SÍLABAS ",
                   msg:" ",
                   path:"images/letraG",
                   structure:[
                              {question:"GALINHA",options:['GAVETAS.jpg','GALINHA.jpg','GALO.jpg','GARRAFA.jpg'],key:1},

                              {question:"GATO",options:['GATO.jpg','GARRAFA.jpg','GAIOLA.jpg' ,'GALHO.jpg'],key:0},

                              {question:"GIZ",options:['GOTA.jpg','GOLEIRO.jpg','GIZ.jpg','GOLA.jpg'],key:2},
 
                              {question:"GALO",options:['GEMA.jpg','GARAGEM.jpg','GAROTA.jpg','GALO.jpg'],key:3},
                     
                              {question:"GÊNIO",options:['GENIO.jpg' ,'GANGORRA.jpg','GARRAFA.jpg','GALHO.jpg'],key:0},

                              {question:"GAVETAS",options:['GAIVOTA.jpg' ,'GANGORRA.jpg','GAVETAS.jpg','GALHO.jpg'],key:2},
                              
                              {question:"GILETE",options:['GAVIAO.jpg','GILETE.jpg','GANGORRA.jpg','GOLFE.jpg'],key:1},
                              
                              {question:"GAIVOTA",options:['GANGORRA.jpg','GAMBA.jpg','GALO.jpg','GAIVOTA.jpg'],key:3},
                            
                              {question:"GELO",options:['GELO.jpg','GELADEIRA.jpg','GIGANTE.jpg','GIRASSOL.jpg'],key:0},

                              {question:"GARÇA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GARCA.jpg'],key:3},   
                              
                              {question:"GULOSEIMAS",options:['GOTA.jpg','GULOSEIMAS.jpg','GARRAFA.jpg','GULOSEIMAS.jpg'],key:1},

                              {question:"GELATINA",options:['GIRASSOL.jpg','GELEIA.jpg','GELATINA.jpg','GIGANTE.jpg'],key:2},

                              {question:"GAIOLA",options:['GAIOLA.jpg','GOIABA.jpg','GOLFINHOS.jpg','GOLEIRO.jpg'],key:0},
                           
                              {question:"GÊMEAS",options:['GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg', 'GIRASSOL.jpg',],key:2},

                              {question:"GARRAFA",options:['GIRASSOL.jpg','GARRAFA.jpg','GIRAFA.jpg','GELADEIRA.jpg'],key:1},

                              {question:"GALHO",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:0},

                              {question:"GOTA",options:['GANGORRA.jpg','GOTA.jpg','GALOCHA.jpg','GAROTA.jpg'],key:1},                           

                              {question:"GANSO",options:['GALHO.jpg','GIRASSOL.jpg','GANSO.jpg','GOLFINHOS.jpg'],key:2},
                              
                              {question:"GELÉIA",options:['GELEIA.jpg','GANSO.jpg','GALO.jpg' ,'GAIVOTA.jpg'],key:0},
 
                              {question:"GANGORRA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GANGORRA.jpg'],key:3},

                              {question:"GIRAFA",options:['GIRAFA.jpg','GANGORRA.jpg','GAROTO.jpg', 'GOIABA.jpg'],key:0},

                              {question:"GAROTO",options:['GOLFINHOS.jpg','GOIABA.jpg','GAROTO.jpg','GIRASSOL.jpg'],key:2},

                              {question:"GOIABA",options:['GOIABA.jpg','GIRASSOL.jpg','GELADEIRA.jpg','GAVETAS.jpg'],key:0},
                              
                              {question:"GINÁSTICA",options:['GALHO.jpg','GINASTICA.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:1},
                              
                              {question:"GORILA",options: ['GALHO.jpg', 'GALINHA.jpg','GATO.jpg','GORILA.jpg'],key:3},

                              {question:"GALOCHA",options:['GIRASSOL.jpg','GALOCHA.jpg','GIRAFA.jpg','GORILA.jpg'],key:1},

                              {question:"GOLEIRO",options:['GALOCHA.jpg','GALHO.jpg','GAVIAO.jpg','GOLEIRO.jpg'],key:3},
                               
                              {question:"GAVIÃO",options:['GALHO.jpg','GINCANA.jpg','GAVIAO.jpg','GANGORRA.jpg'],key:2},
                              
                              {question:"GOLFINHOS",options:['GOLFINHOS.jpg','GAIVOTA.jpg','GAVETAS.jpg' ,'GARFO.jpg'],key:0},

                              {question:"GARAGEM",options:['GOLA.jpg','GORILA.jpg','GELADEIRA.jpg','GARAGEM.jpg'],key:3},

                              {question:"GIRASSOL",options:['GELO.jpg','GELEIA.jpg','GIRASSOL.jpg','GARCONETE.jpg'],key:2},

                              {question:"GÊNIO",options:['GAMBA.jpg','GENIO.jpg','GATO.jpg','GAVIAO.jpg'],key:1},
                             
                              {question:"GOLFE",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOLFE.jpg','GEMA.jpg'],key:2},

                              {question:"GAMBÁ",options:['GELADEIRA.jpg','GAMBA.jpg','GENIO.jpg','GEMEAS.jpg'],key:1},
                              
                              {question:"GELADEIRA",options:['GELADEIRA.jpg','GIRASSOL.jpg','GINCANA.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GAROTA",options:['GEMEAS.jpg','GIGANTE.jpg','GOLFINHOS.jpg','GAROTA.jpg'],key:3},
                           
                              {question:"GIGANTE",options:['GANGORRA.jpg','GOTA.jpg','GIGANTE.jpg','GAROTA.jpg'],key:2},

                              {question:"GAFANHOTO",options:['GELADEIRA.jpg','GAFANHOTO.jpg','GELO.jpg','GEMEAS.jpg'],key:1},
                             
                              {question:"G0MA",options:['GULOSEIMAS.jpg','GOLEIRO.jpg','GOTA.jpg','GOMA.jpg'],key:3},
                             
                              {question:"GARÇONETE",options:['GARCONETE.jpg','GIRASSOL.jpg','GEMEAS.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GOLA",options:['GARAGEM.jpg','GENIO.jpg','GOLA.jpg','GELEIA.jpg'],key:2},

                              {question:"GEMA",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOTA.jpg','GEMA.jpg'],key:3},
                              
                              {question:"GINCANA",options:['GIZ.jpg','GINCANA.jpg','GORILA.jpg','GALOCHA.jpg'],key:1},

                              {question:"GARFO",options:['GARFO.jpg','GATO.jpg','GALOCHA.jpg','GAFANHOTO.jpg'],key:0}

              ]

             }             
           ]
 // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            //28 - 06 - 2021 - 4 Tentativa - Desapareceu tudo novamente

              }
               
             //28-06-2021 - 3 Tentativa - Apareceu no gameover uma vez deu certo, na segunda vez os confetis.
            
              var confetti = {
            maxCount: 150,
            speed: 2,
            frameInterval: 15,
            alpha: 1,
            gradient: !1,
            start: null,
            stop: null,
            toggle: null,
            pause: null,
            resume: null,
            togglePause: null,
            remove: null,
            isPaused: null,
            isRunning: null
        };
        ! function () {
            confetti.start = s, confetti.stop = w, confetti.toggle = function () {
                e ? w() : s()
            }, confetti.pause = u, confetti.resume = m, confetti.togglePause = function () {
                i ? m() : u()
            }, confetti.isPaused = function () {
                return i
            }, confetti.remove = function () {
                stop(), i = !1, a = []
            }, confetti.isRunning = function () {
                return e
            };
            var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
                .mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
                n = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,",
                    "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,",
                    "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"
                ],
                e = !1,
                i = !1,
                o = Date.now(),
                a = [],
                r = 0,
                l = null;

            function d(t, e, i) {
                return t.color = n[Math.random() * n.length | 0] + (confetti.alpha + ")"), t.color2 = n[Math.random() *
                        n.length | 0] + (confetti.alpha + ")"), t.x = Math.random() * e, t.y = Math.random() * i - i, t
                    .diameter = 10 * Math.random() + 5, t.tilt = 10 * Math.random() - 10, t.tiltAngleIncrement = .07 *
                    Math.random() + .05, t.tiltAngle = Math.random() * Math.PI, t
            }

            function u() {
                i = !0
            }

            function m() {
                i = !1, c()
            }

            function c() {
                if (!i)
                    if (0 === a.length) l.clearRect(0, 0, window.innerWidth, window.innerHeight), null;
                    else {
                        var n = Date.now(),
                            u = n - o;
                        (!t || u > confetti.frameInterval) && (l.clearRect(0, 0, window.innerWidth, window.innerHeight),
                            function () {
                                var t, n = window.innerWidth,
                                    i = window.innerHeight;
                                r += .01;
                                for (var o = 0; o < a.length; o++) t = a[o], !e && t.y < -15 ? t.y = i + 100 : (t
                                    .tiltAngle += t.tiltAngleIncrement, t.x += Math.sin(r) - .5, t.y += .5 * (Math
                                        .cos(r) + t.diameter + confetti.speed), t.tilt = 15 * Math.sin(t.tiltAngle)
                                ), (t.x > n + 20 || t.x < -20 || t.y > i) && (e && a.length <= confetti
                                    .maxCount ? d(t, n, i) : (a.splice(o, 1), o--))
                            }(),
                            function (t) {
                                for (var n, e, i, o, r = 0; r < a.length; r++) {
                                    if (n = a[r], t.beginPath(), t.lineWidth = n.diameter, i = n.x + n.tilt, e = i + n
                                        .diameter / 2, o = n.y + n.tilt + n.diameter / 2, confetti.gradient) {
                                        var l = t.createLinearGradient(e, n.y, i, o);
                                        l.addColorStop("0", n.color), l.addColorStop("1.0", n.color2), t.strokeStyle = l
                                    } else t.strokeStyle = n.color;
                                    t.moveTo(e, n.y), t.lineTo(i, o), t.stroke()
                                }
                            }(l), o = n - u % confetti.frameInterval), requestAnimationFrame(c)
                    }
            }

            function s(t, n, o) {
                var r = window.innerWidth,
                    u = window.innerHeight;
                window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window
                    .msRequestAnimationFrame || function (t) {
                        return window.setTimeout(t, confetti.frameInterval)
                    };
                var m = document.getElementById("confetti-canvas");
                null === m ? ((m = document.createElement("canvas")).setAttribute("id", "confetti-canvas"), m
                    .setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),
                    document.body.prepend(m), m.width = r, m.height = u, window.addEventListener("resize",
                        function () {
                            m.width = window.innerWidth, m.height = window.innerHeight
                        }, !0), l = m.getContext("2d")) : null === l && (l = m.getContext("2d"));
                var s = confetti.maxCount;
                if (n)
                    if (o)
                        if (n == o) s = a.length + o;
                        else {
                            if (n > o) {
                                var f = n;
                                n = o, o = f
                            }
                            s = a.length + (Math.random() * (o - n) + n | 0)
                        }
                else s = a.length + n;
                else o && (s = a.length + o);
                for (; a.length < s;) a.push(d({}, r, u));
                e = !0, i = !1, c(), t && window.setTimeout(w, t)
            }

            function w() {
                e = !1
            }
        }();
       
// custom js
 confetti.start();
 


           
              }


      //28-06-2021 - 2 Tentativa - SUMIU TUDO
      
 
     }
    // add 28 - 06 - 2021 - APARECEU DESTE A PRIMEIRA PÁGINA
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }

     



  
   
   
 


