(function(win, doc, PoT){

    win.tpl = function(view) {
      return _.template(doc.getElementById(view + '-viewtpl').innerHTML);
    };

    win.jsonData = function(name) {
      try{
      return doc.querySelector("[data-path='" +name + ".json']").getAttribute('src');
        }
      catch(e){
      console.error(e);
      console.log('Error on loading jsonData '+name+".json");
      }
    };

    PoT.Models = {};
    PoT.Models.Instances = {};
    PoT.Collections = {};
    PoT.Collections.Instances = {};
    PoT.Views = {};
    PoT.Views.Instances = {};
    PoT.AppRouter = {};
    PoT.AppRouter.Instance = {};
    PoT.Events = {};
    PoT.version = "0.1.9";



})(window, window.document, window.PoT || (window.PoT = {}));

(function(win, doc, PoT){

    PoT.AppRouter = Backbone.Router.extend({
     routes: {
      '': 'home',
      'game/:difficulty': 'game',
      '*path': 'redirect404' // ALWAYS MUST BE THE LAST ROUTE
        },

        /**
     * Router init
     * @return {void}
     */
    initialize: function() {},

    /**
     * Used before every action
     * @return {void}
     */
    before: function() {
        /*if(_.isUndefined(PoT.Views.Instances.HomeView)){
            this.home();
        }*/
    },

    /**
     * Used after every action
     * @return {void}
     */
    after: function() {},

    home: function() {
      this.before();

      PoT.Views.Instances.HomeView = new PoT.Views.HomeView();
      PoT.Views.Instances.HomeView.render();

      this.after();
        },
    game: function(difficulty) {
      this.before();

      PoT.Views.Instances.GameView = new PoT.Views.GameView({'difficulty':difficulty});
      PoT.Views.Instances.GameView.render();

      this.after();
        },

    redirect404:function(){
        console.warn('the requested route is unknown back to home');
        this.home();
        }

    });

})(window, window.document, window.PoT || (window.PoT = {}));
(function(win, doc, PoT){

PoT.Models.Dice = Backbone.Model.extend({

    defaults: {
        x:0,
        y:0,
        z:0,
        value:-1,
        mesh:null
        },


          //overriding set
     validate : function(attributes, options) {

        if(!(this.collection.minCoord <= attributes[PoT.X_AXIS] &&  attributes[PoT.X_AXIS] <= this.collection.maxCoord))
            return 'X Out of range (' + this.collection.minCoord + ',' + this.collection.maxCoord+')';

        if(!(this.collection.minCoord <= attributes[PoT.Y_AXIS] &&  attributes[PoT.Y_AXIS] <= this.collection.maxCoord))
            return 'Y Out of range (' + this.collection.minCoord + ',' + this.collection.maxCoord+')';

        if(!(this.collection.minCoord <= attributes[PoT.Z_AXIS] &&  attributes[PoT.Z_AXIS] <= this.collection.maxCoord))
            return 'Z Out of range (' + this.collection.minCoord + ',' + this.collection.maxCoord+')';

        return '';
     }
});

PoT.Collections.Dices = Backbone.Collection.extend({
  model: PoT.Models.Dice,

  maxDices:0,
  initialize:function(options)
  {
    this.maxDices = options.maxDices;
    this.minCoord = options.minCoord;
    this.maxCoord = options.maxCoord;
  },

  initWithRandomDice:function(nbOfDice){

    for(d = 0;d < nbOfDice;d++){
        var randomDice = new PoT.Models.Dice({
            x:_.random(this.minCoord,this.maxCoord),
            y:_.random(this.minCoord,this.maxCoord),
            z:_.random(this.minCoord,this.maxCoord),
            value:_.random(1,2)
        });

    if(this.length ===  this.maxDices )
        {
        console.log('You loose T.T');
        return false;
        }

    //do not add a new dice on an occupied spot
    if(!this.isSpotOccupied(randomDice)){
        this.add(randomDice);
        }
    else
        {//retry
        this.addRandomDice(nbOfDice);
        }
    }
  },
  addRandomDice:function(){
    return this.initWithRandomDice(1);
  },
  isSpotOccupied:function(model){
    var newSpotCoords = model.pick(PoT.X_AXIS,PoT.Y_AXIS,PoT.Z_AXIS);

    return !_.isUndefined(this.findWhere(newSpotCoords));
  }
});

})(window, window.document, window.PoT || (window.PoT = {}));

(function(win, doc, PoT){

    /**
    * PoT constants
    */
   PoT.DIFFICULTY_EASY = 4;
   PoT.DIFFICULTY_NORMAL = 3;
   PoT.DIFFICULTY_DIFFICULT = 2;

   PoT.LEFT_ARROW = 37,PoT.UP_ARROW = 38, PoT.RIGHT_ARROW = 39, PoT.DOWN_ARROW = 40;
   PoT.MOUSE_NO_DIRECTION = 0 ,PoT.MOUSE_UP = -1,PoT.MOUSE_DOWN = 1,PoT.MOUSE_LEFT = -2,PoT.MOUSE_RIGHT = 2 ,PoT.MOUSE_WHEEL_UP = -3, PoT.MOUSE_WHEEL_DOWN = 3;

   PoT.GO_LEFT = -0.02,PoT.GO_UP = -0.01, PoT.GO_RIGHT = -PoT.GO_LEFT, PoT.GO_DOWN = -PoT.GO_UP;
   PoT.MAIN_CUBE_WIDTH = 600;
   PoT.MOUSE_THROTTLE_SENSIVITY = 600;
   PoT.REFRESH_SCENE_THROTTLE_SENSIVITY = 150;

   PoT.X_AXIS = 'x',PoT.Y_AXIS = 'y',PoT.Z_AXIS = 'z';

   PoT.SCORE_COLOR_BACKGROUND = 0x9cbee2;//0x5c5c5c;
   PoT.SCORE_TEXT_COLOR = 0xd29ce2;//0x5c5c5c;

  /**
   * GameView
   * @type Backbone.View
   */
  PoT.Views.GameView = Backbone.View.extend({

    template: tpl('game'),

    el: '#PoTContainer',

    lastX:0,
    lastY:0,
    lastTouch:0,

    events: {
        'mousemove':'filterProcessDiceMove',
        'touchend canvas':'processTouchEnd',
        'touchstart canvas':'processTouchStart',
        'mousewheel canvas':'processMouseWheel',//other browser
        'DOMMouseScroll canvas':'processMouseWheel', // FF mousewheel event,
        'click .backhome':'backToHome'
    },

    backToHome:function(){
        PoT.AppRouter.Instance.navigate('', true);
    },
    processMouseWheel:function(e){
        var zDirection = PoT.MOUSE_NO_DIRECTION;
        e = window.event || e;

        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

        if (delta < 0) {
            zDirection = PoT.MOUSE_WHEEL_DOWN;
        } else {
            zDirection = PoT.MOUSE_WHEEL_UP;
        }

        this.applyDiceDirection(zDirection);
    },

    filterProcessDiceMove: _.throttle(
        function(e) {
            this.processDiceMove(e);
            },
        PoT.MOUSE_THROTTLE_SENSIVITY,
        {leading: false}
        )
    ,
    processTouchStart:function(e){
        //save x1,y1 position
        this.lastTouch = e.originalEvent.touches[0];
    },

    processTouchEnd:function(e){
        //save x2,y2 position
        var currentTouch = e.originalEvent.changedTouches[0];
        var Xdelta = currentTouch.clientX - this.lastTouch.clientX;
        var Ydelta = currentTouch.clientY - this.lastTouch.clientY;
        var directorCoeff = Ydelta/Xdelta;

        if(Math.abs(directorCoeff) >= 0.5 && Math.abs(directorCoeff) < 1){//moving on z axis
            if(Ydelta > 0){
                this.applyDiceDirection(PoT.MOUSE_WHEEL_DOWN);
            }else {
                 this.applyDiceDirection(PoT.MOUSE_WHEEL_UP);
            }
        }
        else{//moving on x or y axis
            this.processDiceMove(e.originalEvent.changedTouches[0]);
        }
    },

    processDiceMove:function(e){
        var xDirection = yDirection = PoT.MOUSE_NO_DIRECTION;

        if (e.pageY < this.lastY) {
            yDirection = PoT.MOUSE_UP;
        } else {
            yDirection = PoT.MOUSE_DOWN;
        }

        if (e.pageX < this.lastX) {
            xDirection = PoT.MOUSE_LEFT;
        } else {
            xDirection = PoT.MOUSE_RIGHT;
        }

        //determine the main important direction
        var xWeight = Math.abs(this.lastX - e.pageX);
        var yWeight = Math.abs(this.lastY - e.pageY);

        this.lastY = e.pageY;
        this.lastX = e.pageX;

        //DO NOTHING can't determine main direction
        if(xWeight === yWeight){
           return true;
        }

        //apply x direction
        if(xWeight > yWeight){
          this.applyDiceDirection(xDirection);
        }
        else {// apply y direction
         this.applyDiceDirection(yDirection);
        }


    },
    applyDiceDirection:function (mainDirection){

        switch(mainDirection)
        {
            case PoT.MOUSE_WHEEL_UP:
                console.log('MOUSE_WHEEL_UP');
                this.moveDice('z',-1);
            break;

            case PoT.MOUSE_WHEEL_DOWN:
                console.log('MOUSE_WHEEL_DOWN');
                this.moveDice('z',1);
            break;

            case PoT.MOUSE_UP:
                console.log('MOUSE_UP');
                this.moveDice('y',1);
            break;

            case PoT.MOUSE_DOWN:
                console.log('MOUSE_DOWN');
                this.moveDice('y',-1);
            break;

            case PoT.MOUSE_LEFT:
                console.log('MOUSE_LEFT');
                this.moveDice('x',-1);
            break;

            case PoT.MOUSE_RIGHT:
                console.log('MOUSE_RIGHT');
                this.moveDice('x',1);
            break;

        default:
            console.log('Unknown mainDirection',mainDirection);
            break;
        }
    },

    processKeyEvent: function(e){
    var rotationParams = {x:0,y:0};

    switch(e.keyCode)
        {
            case PoT.LEFT_ARROW:
                rotationParams.y = PoT.GO_LEFT;
            break;

            case PoT.UP_ARROW:
                rotationParams.x = PoT.GO_UP;
            break;

            case PoT.RIGHT_ARROW:
                rotationParams.y = PoT.GO_RIGHT;
            break;

            case PoT.DOWN_ARROW:
                rotationParams.x = PoT.GO_DOWN;
            break;

        default:
            console.log('Unknown key code',e);
            break;
        }


     this.processRotation(rotationParams);
    },

    initialize: function(options) {

        this.subtemplate = tpl('gamecanvas');

        this.difficulty = options.difficulty * 1;

        //add a key listener for processing the rotation of the main cube
        $(window).on("keydown", this.processKeyEvent.bind(this));

        //define a camera
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        this.camera.position.z = 1000;

        //define the scene
        this.scene = new THREE.Scene();

        this.geometry = new THREE.BoxGeometry( PoT.MAIN_CUBE_WIDTH, PoT.MAIN_CUBE_WIDTH, PoT.MAIN_CUBE_WIDTH );
        this.material = new THREE.MeshNormalMaterial();

        //define the main cube
        this.mainCube = new THREE.Mesh( this.geometry, this.material );

        //define the box surrounding the main cube
        this.mainBox = new THREE.BoxHelper( this.mainCube );
        this.mainBox.material.color.set( 0x00ffff );

        this.scene.add( this.mainBox );

        //draw the box from the main cube
        this.initBox();

        //init the dice matrix
        this.dices = new PoT.Collections.Dices({'maxDices':Math.pow(this.difficulty,3),
                                                'minCoord':this.getMinDiceCoord(),
                                                'maxCoord':this.getMaxDiceCoord()
                                                });
        this.dices.on('add', this.addDice, this);

        this.dices.initWithRandomDice(_.random(2,this.difficulty));

        //add an axis helper for debug
        //this.axisHelper = new THREE.AxisHelper( 300 );
        //this.scene.add( this.axisHelper );

        //add score zone
        this.initScoreTab();

        //bind the refresh score value on collection add
        this.dices.on('add', this.refreshScoreValue, this);

        //choose the proper renderer
        if (window.WebGLRenderingContext) {
            try {
                this.renderer = new THREE.WebGLRenderer();
                }
            catch (e){
                console.error('No WebGL here try another',e);
                this.renderer = void(0);
                return false;
                }
            } else {
            this.renderer = new THREE.CanvasRenderer();
            };

        //defines the renderer size
        this.renderer.setSize( window.innerWidth * (75 /100), window.innerHeight * (75 /100));

        //render the scene with the chosen camera
        this.renderScene();
    },

    diceCoord:function (c)
    {
        return  c * this.getDiceWidth() + this.getDiceRatio();
    },

    getMinDiceCoord:function()
    {
        var minDice = 0;
        var diff = this.difficulty;

        switch(true)
        {
            case (diff == PoT.DIFFICULTY_DIFFICULT) :
                minDice = 0;
                break;
            case (diff == PoT.DIFFICULTY_NORMAL) :
                minDice = -1;
                break;
            case (diff == PoT.DIFFICULTY_EASY) :
                minDice = -2;
                break;
            default:
            console.log('not found');
            break;
        }

        return minDice;
    },
    getMaxDiceCoord:function()
    {
        return 1;
    },

    getDiceWidth:function()
    {
        return  PoT.MAIN_CUBE_WIDTH / (this.difficulty);

    },
    getDiceRatio:function(){
        return this.getDiceWidth()/2;
    },
    renderDifficultyMode:function(){
    if(this.difficulty == PoT.DIFFICULTY_DIFFICULT)
        return this.$('#mode').text('DIFFICULT Mode');

    if(this.difficulty == PoT.DIFFICULTY_NORMAL)
        return this.$('#mode').text('Normal Mode');

    return this.$('#mode').text('Easy Mode');
    },
    render: function() {
    this.$el.empty();
    this.$el.append(this.template);
    this.renderDifficultyMode();

    if(!_.isUndefined(this.renderer)){
        //append canvas to the DOM
       this.$el.append(this.renderer.domElement);
       //tricks in order not to use a subview for canvas
       $(this.renderer.domElement).wrap(this.subtemplate());
       }
    else
        this.$el.append('<div>Sorry your browser does not support WebGL</div>');

    },

    initBox: function(){
        this.mainCube.rotation.x = 0;
        this.mainCube.rotation.y = -0.50;
        this.mainBox = new THREE.Box3().setFromObject(this.mainCube);
    },

    addDice:function(model)
    {
        this.geometry = new THREE.BoxGeometry( this.getDiceWidth(),this.getDiceWidth(),this.getDiceWidth());
        this.material = new THREE.MeshBasicMaterial({map:this.getFaceTexture(model.get('value'))});

        var dice = new THREE.Mesh( this.geometry, this.material );

        dice.rotation.x = 0;
        dice.rotation.y = -0.50;

        dice.position.set(this.diceCoord(model.get('x')),
            this.diceCoord(model.get('y')),
            this.diceCoord(model.get('z'))
        );

        model.set('mesh',dice);

        model.on('change:x', this.refreshDicePosition, this);
        model.on('change:y', this.refreshDicePosition, this);
        model.on('change:z', this.refreshDicePosition, this);
        model.on('change:value', this.refreshDiceValue, this);
        model.on('change:value',this.refreshScoreValue,this);
        model.on('remove', this.removeDiceFromScene, this);

        this.scene.add( dice);

        return true;
    },
    removeDiceFromScene:function(model)
    {
        var dice = model.get('mesh');

        dice.material.dispose();
        dice.geometry.dispose();

        this.scene.remove(dice);
    },
    moveDice:function(axis,operation){
        var _self = this;

        for(i=0;i < 4;++i){// process 4 times the moving in order to reach the furthe spot for each dice
            this.dices.forEach (function(model, index,dices){
                //skip if model has been removed from a previous iteration
                if(_.isUndefined(model)){
                    return true;
                }

                if(Math.abs(model.get(axis) + operation)  <=  _self.difficulty - 1  ){
                    var newSpotCoords = model.pick(PoT.X_AXIS,PoT.Y_AXIS,PoT.Z_AXIS);

                    newSpotCoords[axis] += operation;

                    newposition = _self.dices.findWhere(newSpotCoords);

                    //if new position is not occupied move the dice
                    if(_.isUndefined(newposition)){
                        model.set(axis,model.get(axis) + operation,{validate:true});
                    }
                    else{//we have a collision merge the dice if they have the same value

                        if(newposition.get('value') === model.get('value')){
                            newposition.set('value',newposition.get('value') + model.get('value'));
                            model.destroy();
                        }
                        else{
                            return true;
                        }
                    }
                }//end if
            });
        }//end for loop

        //if we can't add a new dice we loose.
        if(this.dices.addRandomDice() === false){
            return this.processGameOver();
        }

    },
    processGameOver:function(){
        this.dices.off();

        this.dices.forEach (function(model, index){
        model.off();
        });

        this.stopListening();

        $(window).off();

        this.$el.off();
        alert('You Loose T.T : Your actual score is ' + this.getTotalScore());

        PoT.AppRouter.Instance.navigate('', true);

        return false;
    },
    refreshDicePosition:function(model){
        var dice = model.get('mesh');

        dice.position.set(this.diceCoord(model.get('x')),
            this.diceCoord(model.get('y')),
            this.diceCoord(model.get('z'))
        );

    },

    renderScene:function () {

    requestAnimationFrame(this.renderScene.bind(this));

    this.renderer.render( this.scene, this.camera );
    },

    refreshDiceValue:function(model){
        var dice = model.get('mesh');

        dice.material.dispose();

        dice.material = new THREE.MeshBasicMaterial({map:this.getFaceTexture(model.get('value'))});
    },

    refreshScoreValue:function(){
        this.scorePlane.material = new THREE.MeshBasicMaterial( {color: PoT.SCORE_COLOR_BACKGROUND, side: THREE.DoubleSide,map:this.getScoreTexture(this.getTotalScore())} );
    },
    /**
     * getTotalScore return the power of three sum of each dice
     * @return int
     */
    getTotalScore:function()
    {
        return this.dices.reduce(function(sum, dice){return sum + Math.pow(dice.get('value'),3);}, 0);
    },

    getFaceTexture:function(faceValue)
    {
        var numberToDisplay = Math.pow(faceValue,3).toString();
        //create image
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = 150;
        canvas.height = 150;
        ctx.font = 'Bold 40px Arial';
        ctx.textAlign = 'center';

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'red';
        ctx.strokeText(numberToDisplay, canvas.width/2, canvas.height/2);

        // canvas contents will be used for a texture
        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;
        return texture;
    },
    initScoreTab:function(scoreValue)
    {
    var geometry = new THREE.PlaneBufferGeometry( 512, 512, 1 );
    var material = new THREE.MeshBasicMaterial( {color: PoT.SCORE_COLOR_BACKGROUND, side: THREE.DoubleSide,map:this.getScoreTexture(this.getTotalScore())} );
    this.scorePlane = new THREE.Mesh( geometry, material );
    this.scorePlane.position.set(1000,-100,0);

    this.scene.add(this.scorePlane);
    },
    getScoreTexture:function(scoreValue){
        //create image
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = 150;
        canvas.height = 150;
        ctx.font = 'Bold 16px Arial';
        ctx.textAlign = 'center';

        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = PoT.SCORE_TEXT_COLOR;
        ctx.strokeText('Score : ' + scoreValue, canvas.width/2, canvas.height/2);

        // canvas contents will be used for a texture
        var texture = new THREE.Texture(canvas)
        texture.needsUpdate = true;

        return texture;
    },
    processRotation: function(rotationParams){
        var _self = this;

        this.mainCube.rotation.x += rotationParams.x;
        this.mainCube.rotation.y += rotationParams.y;
        //this.axisHelper.rotation.x += rotationParams.x;
        //this.axisHelper.rotation.y += rotationParams.y;

        this.dices.forEach (function(model, index){
            var dice = model.get('mesh');

            if(!_.isUndefined(dice) && dice != null){
                dice.rotation.x += rotationParams.x;
                dice.rotation.y += rotationParams.y;
            }
        });

        this.mainBox = new THREE.Box3().setFromObject(this.mainCube);

    }

  });


})(window, window.document, window.PoT || (window.PoT = {}));

(function(win, doc, PoT){

  /**
   * HomeView
   * @type Backbone.View
   */
  PoT.Views.HomeView = Backbone.View.extend({

    el: '#PoTContainer',

    template: tpl('home'),

    events:{
        'click .start_game':'startGame'
    },

    startGame:function(e){
        PoT.AppRouter.Instance.navigate('game/'+ $(e.target).data('difficulty'), true);
    },

    initialize: function() {},

    render:function(){

    this.$el.html(this.template);

    return this;
    }
    });

})(window, window.document, window.PoT || (window.PoT = {}));

$(document).ready(function(){
// Initiate the router
PoT.AppRouter.Instance = new PoT.AppRouter;
// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

});