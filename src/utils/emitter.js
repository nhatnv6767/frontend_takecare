import EventEmitter from 'events'

const _emitter = new EventEmitter();
// unlimit listener
_emitter.setMaxListeners(0);

export const emitter = _emitter;