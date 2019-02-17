/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @description  Asteroid: Game
 * @license      Digitsensitive
 */

/// <reference path="../../dts/phaser.d.ts"/>

import "phaser";
import { BootScene } from "./scenes/bootScene";
import { MainMenuScene } from "./scenes/mainMenuScene";
import { GameScene } from "./scenes/gameScene";

export const asteroidsDefaultconfig: GameConfig = {
  title: "Asteroids",
  url: "https://github.com/digitsensitive/phaser3-typescript",
  version: "1.0",
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#000000",
  render: { pixelArt: false, antialias: true, autoResize: false }
};

export class Asteroids extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

// window.addEventListener("load", () => {
//   var game = new Asteroids(config);
// });
