
let storage = localStorage

// The structure of this may change in the future, so I'll keep this private.
const DEFAULTS = {

  // Game mode (KB, BM)
  'player.P1.mode':             'KB',

  // Keyboard mapping
  'input.P1.keyboard.BM.SC':    '16',
  'input.P1.keyboard.BM.SC2':   '65',
  'input.P1.keyboard.BM.1':     '90',
  'input.P1.keyboard.BM.2':     '83',
  'input.P1.keyboard.BM.3':     '88',
  'input.P1.keyboard.BM.4':     '68',
  'input.P1.keyboard.BM.5':     '67',
  'input.P1.keyboard.BM.6':     '70',
  'input.P1.keyboard.BM.7':     '86',

  'input.P1.keyboard.KB.1':     '83',
  'input.P1.keyboard.KB.2':     '68',
  'input.P1.keyboard.KB.3':     '70',
  'input.P1.keyboard.KB.4':     '32',
  'input.P1.keyboard.KB.5':     '74',
  'input.P1.keyboard.KB.6':     '75',
  'input.P1.keyboard.KB.7':     '76',

  // Note speed
  'player.P1.speed':            '1.0',

  // Scratch placement (left, right, off)
  'player.P1.scratch':          'left',

  // Panel placement (left, center, right)
  'player.P1.panel':            'center',

  // Mirrors note
  'player.P1.notes.mirror':     '0',

  // Balances left-right hand usage
  'player.P1.notes.balance':    '0',

  // Offsets
  'system.offset.audio-input':  '0',
  'system.offset.audio-visual': '0',

  // Version
  'system.last-seen-version':   '0.0.0',

}

// Returns all the available options.
export function keys () {
  return Object.keys(DEFAULTS)
}

// Gets the options value by a specified key.
export function get (key) {
  return storage.getItem(key) || DEFAULTS[key]
}

// Saves the options value by a specified key.
export function set (key, value) {
  storage.setItem(key, value)
}

// Gets the options Storage engine.
export function getStorage () {
  return storage
}

// Sets the options Storage engine.
// Useful for injecting a mock storage from tests. A storage engine should have
// ``getItem`` and ``setItem`` methods. An example of a storage engine
// that implements this interface is the ``localStorage``.
export function setStorage (_storage) {
  storage = _storage
}

// Upgrades the options from previous versions
// v1.0.0-beta.7 - split game into modes : BM and KB
if (get('player.P1.scratch') === 'off') {
  set('player.P1.scratch', 'left')
}
