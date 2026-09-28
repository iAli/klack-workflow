#!/usr/bin/env osascript -l JavaScript
function run(argv) {
  const Klack = Application('com.henrikruscon.Klack');
  const cmd = argv[0];

  if (cmd === 'launch') {
    Klack.launch();
    return formatJson('break');
  }

  if (Klack.running()) {
    try {
      switch (cmd) {
        case 'toggle':
          Klack.toggle();
          return formatJson('break');
        case 'soft':
          Klack.volume('30');
          return formatJson('main');
        case 'balanced':
          Klack.volume('60');
          return formatJson('main');
        case 'loud':
          Klack.volume('90');
          return formatJson('main');
        case 'japanese_black':
          Klack.switch('japanese black');
          return formatJson('switch');
        case 'crystal_purple':
          Klack.switch('crystal purple');
          return formatJson('switch');
        case 'oreo':
          Klack.switch('oreo');
          return formatJson('switch');
        case 'cardboard':
          Klack.switch('cardboard');
          return formatJson('switch');
        case 'milky_yellow':
          Klack.switch('milky yellow');
          return formatJson('switch');
        case 'super_red':
          Klack.switch('super red');
          return formatJson('switch');
        case 'cream':
          Klack.switch('cream');
          return formatJson('switch');
        case 'volume':
          return formatJson('volume');
        case 'switch':
          return formatJson('switch');
        default:
          console.log('Unknown option: ' + cmd);
          return formatJson('break');
      }
    }
    catch (e) {
      console.log(e);
      return formatJson('break');
    }
  }
}

function formatJson(menu) {
  return JSON.stringify({
    alfredworkflow: {
      variables: {
        menu,
      }
    }
  });
}