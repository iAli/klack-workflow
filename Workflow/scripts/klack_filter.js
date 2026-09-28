#!/usr/bin/env osascript -l JavaScript
function run() {
  const Klack = Application('com.henrikruscon.Klack');
  const items = [];
  const menu = $.NSProcessInfo.processInfo.environment.objectForKey('menu').js || 'main';

  if (!Klack.running()) {
    items.push({
      title: 'Klack is not running',
      subtitle: 'Press Enter to launch Klack',
      arg: 'launch',
      icon: {
        path: './icons/klack_off.png',
      },
    });
    return JSON.stringify({ items });
  }

  try {
    const currentSwitch = Klack.currentSwitch();
    if (menu === 'main') {
      const currentStatus = Klack.currentStatus();
      const currentVolume = Klack.currentVolume();

      items.push({
        title: currentStatus ? 'Disable Klack' : 'Enable Klack',
        arg: 'toggle',
        icon: {
          path: currentStatus ? './icons/klack_on.png' : './icons/klack_off.png',
        },
      });
      items.push({
        title: 'Volume Level: ' + currentVolume + '%',
        // subtitle: 'Current: ' + currentVolume + '%',
        arg: currentVolume > 70 ? 'soft' : currentVolume < 40 ? 'balanced' : 'loud',
        icon: {
          path: './icons/volume.png',
        },
      });
      items.push({
        title: 'Select Switch Set',
        subtitle: 'Current: ' + currentSwitch.replace(/\b\w/g, c => c.toUpperCase()),
        arg: 'switch',
        icon: {
          path: './icons/switch.png',
        },
      });
    }
    else if (menu === 'switch') {
      items.push({
        title: 'Japanese Black',
        subtitle: 'CherryMX™' + (currentSwitch === 'japanese black' ? '  —  Current' : ''),
        arg: 'japanese_black',
        icon: {
          path: './icons/japanese_black.png',
        },
      });
      items.push({
        title: 'Crystal Purple',
        subtitle: 'Everglide™' + (currentSwitch === 'crystal purple' ? '  —  Current' : ''),
        arg: 'crystal_purple',
        icon: {
          path: './icons/crystal_purple.png',
        },
      });
      items.push({
        title: 'Oreo',
        subtitle: 'Everglide™' + (currentSwitch === 'oreo' ? '  —  Current' : ''),
        arg: 'oreo',
        icon: {
          path: './icons/oreo.png',
        },
      });
      items.push({
        title: 'Cardboard',
        subtitle: 'Flurples™' + (currentSwitch === 'cardboard' ? '  —  Current' : ''),
        arg: 'cardboard',
        icon: {
          path: './icons/cardboard.png',
        },
      });
      items.push({
        title: 'Milky Yellow',
        subtitle: 'Gateron™' + (currentSwitch === 'milky yellow' ? '  —  Current' : ''),
        arg: 'milky_yellow',
        icon: {
          path: './icons/milky_yellow.png',
        },
      });
      items.push({
        title: 'Super Red',
        subtitle: 'Keychron™' + (currentSwitch === 'super red' ? '  —  Current' : ''),
        arg: 'super_red',
        icon: {
          path: './icons/super_red.png',
        },
      });
      items.push({
        title: 'Cream',
        subtitle: 'NovelKeys™' + (currentSwitch === 'cream' ? '  —  Current' : ''),
        arg: 'cream',
        icon: {
          path: './icons/cream.png',
        },
      });
    }
    else {
      console.log('Unknown menu: ' + menu);
      items.push({
        title: 'Error reading Klack info',
        subtitle: 'Unknown menu: ' + menu,
        valid: false,
        icon: {
          path: './icons/klack_off.png',
        },
      });
    }
  }
  catch (e) {
    console.log(e);
    items.push({
      title: 'Error reading Klack info',
      subtitle: e.toString(),
      valid: false,
      icon: {
        path: './icons/klack_off.png',
      },
    });
  }

  return JSON.stringify({ items });
}