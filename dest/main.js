

var MyScene = cc.Scene.extend({
                          onEnter:function () {
                              this._super();
                              var size = cc.director.getWinSize();
                              var sprite = cc.Sprite.create("HelloWorld.png");
                              sprite.setPosition(size.width / 2, size.height / 2);
                              sprite.setScale(0.8);
                              this.addChild(sprite, 0);

                              var label = cc.LabelTTF.create("Test", "Arial", 40);
                              label.setPosition(size.width / 2, size.height / 2);
                              
                              var label2= cc.LabelTTF.create("layer1","Arial","30")
                              label2.setPosition(30, 30);
                              var layer = new cc.Layer();
                              this.addChild(layer);
                              layer.addChild(label2);
                              
                              this.addChild(label, 1);
                          }
                      });  window.onload = function(){
              cc.game.onStart = function(){
                  //load resources
                  cc.LoaderScene.preload(["HelloWorld.png"], function () {
                      var MyScene = cc.Scene.extend({
                          onEnter:function () {
                              this._super();
                              var size = cc.director.getWinSize();
                              var sprite = cc.Sprite.create("HelloWorld.png");
                              sprite.setPosition(size.width / 2, size.height / 2);
                              sprite.setScale(0.8);
                              this.addChild(sprite, 0);

                              var label = cc.LabelTTF.create("Test", "Arial", 40);
                              label.setPosition(size.width / 2, size.height / 2);
                              
                              var label2= cc.LabelTTF.create("layer1","Arial","30")
                              label2.setPosition(30, 30);
                              var layer = new cc.Layer();
                              this.addChild(layer);
                              layer.addChild(label2);
                              
                              this.addChild(label, 1);
                          }
                      });
                      cc.director.runScene(new MyScene());
                  }, this);
              };
              cc.game.run("gameCanvas");
          };