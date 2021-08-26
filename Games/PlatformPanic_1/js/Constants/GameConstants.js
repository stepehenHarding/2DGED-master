/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

//#region Sprite Data

static RUNNER_ANIMATION_DATA = Object.freeze({
  id: "runner_animation_data",
  spriteSheet: document.getElementById("spritesheet_main"),
  alpha: 1,
  takes: {  
    "run_right" :  {       
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 8,
      boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(414, 385, 47, 54),
        new Rect(362, 385, 44, 54),
        new Rect(314, 385, 39, 54),
        new Rect(265, 385, 46, 54),
        new Rect(205, 385, 49, 54),
        new Rect(150, 385, 46, 54),
        new Rect(96, 385, 46, 54),
        new Rect(45, 385, 35, 54),
        new Rect(0, 385, 35, 54)
      ]
    },
    "run_left" : {     
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 8,
      boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
      cellData: [
        new Rect(0, 305, 47, 54),
        new Rect(55, 305, 44, 54),
        new Rect(107, 305, 39, 54),
        new Rect(152, 305, 46, 54),
        new Rect(208, 305, 49, 54),
        new Rect(265, 305, 46, 54),
        new Rect(320, 305, 42, 54),
        new Rect(380, 305, 35, 54),
        new Rect(425, 305, 35, 54)
      ]
    }
  }
});

static ENEMY_ANIMATION_DATA = Object.freeze({
  id: "enemy_animation_data",
  spriteSheet: document.getElementById("spritesheet_main"),
  alpha: 1,
  takes: {  
    "wasp_fly" :  {    
      fps: 16,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(35, 50), 
      cellData: [
        new Rect(20, 234, 35, 50),
        new Rect(90, 234, 35, 50),
        new Rect(160, 234, 35, 50)
      ]
    }
  }
});

static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
  id: "collectibles_animation_data",
  spriteSheet: document.getElementById("spritesheet_main"),
  alpha: 1,
  takes: {  
    "sapphire_glint" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(46, 50), 
      cellData: [
        new Rect(185, 138, 30, 35),
        new Rect(220, 138, 30, 35),
        new Rect(258, 138, 30, 35),
        new Rect(294, 138, 30, 35),
        new Rect(331, 138, 30, 35)
      ]
    },
    "ruby_glint" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 4,
      boundingBoxDimensions: new Vector2(30, 35), 
      cellData: [
        new Rect(3, 138, 30, 35),
        new Rect(39, 138, 30, 35),
        new Rect(76, 138, 30, 35),
        new Rect(112, 138, 30, 35),
        new Rect(148, 138, 30, 35)
      ]
    },
    "gold_glint" :  {
      fps: 6,
      maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
      startCellIndex: 0,
      endCellIndex: 2,
      boundingBoxDimensions: new Vector2(30, 30), 
      cellData: [
        new Rect(65, 540, 30, 30),
        new Rect(96, 540, 30, 30),
        new Rect(128, 540, 30, 30)
      ]
    }
  }
});

static PLATFORM_DATA = Object.freeze({
  id: "platform",
  spriteSheet: document.getElementById("spritesheet_jungle"),
  sourcePosition: new Vector2(0, 112),
  sourceDimensions: new Vector2(48, 48),
  rotation: 0,
  scale: new Vector2(1, 1),
  origin: new Vector2(0, 0),
  alpha: 1,
  actorType: ActorType.Platform,
  translationArray: [
    new Vector2(30, 420),
    new Vector2(80, 420),
    new Vector2(130, 420),
    new Vector2(230, 370),
    new Vector2(280, 370),
    new Vector2(330, 370),
    new Vector2(380, 370),
    new Vector2(480, 300),
    new Vector2(530, 300),
    new Vector2(280, 240),
    new Vector2(330, 240)
  ]
});

static BACKGROUND_DATA = [
  {
    id: "background_1",
    spriteSheet: document.getElementById("forest-1"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 0,
    scrollSpeedMultiplier: 0.2
  },
  {
    id: "background_2",
    spriteSheet: document.getElementById("forest-2"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 0.1,
    scrollSpeedMultiplier: 0.15
  },
  {
    id: "background_3",
    spriteSheet: document.getElementById("forest-3"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 0.15,
    scrollSpeedMultiplier: 0.1
  },
  {
    id: "background_4",
    spriteSheet: document.getElementById("forest-4"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 0.2,
    scrollSpeedMultiplier: 0.05
  },
  {
    id: "background_5",
    spriteSheet: document.getElementById("forest-5"),
    sourcePosition: new Vector2(0, 0),
    sourceDimensions: new Vector2(384, 216),
    translation: new Vector2(0, 0),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Background,
    layerDepth: 0.25,
    scrollSpeedMultiplier: 0.01
  }
];
//#endregion

}
