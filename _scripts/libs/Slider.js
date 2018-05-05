export default class Slider {
  constructor(config) {
    this.config = config;
    if (!(this instanceof Slider)) {
      return new Slider(this.config);
    }
    this.parent = this.config.parent;
    const parentSelector = this.config.parentSelector || '.slider';
    if (!this.parent) {
      try {
        this.parent = document.querySelector(parentSelector);
      } catch (e) {
        throw '[SLIDER]: Container não encontrado.';
      }
    }
    const childSelector = this.config.childSelector || '.slide';
    if (!(this.children = this.parent.querySelectorAll(childSelector))) {
      throw '[SLIDER]: Slides não encontrados.';
    }
    this.index = 0;
    this.duration = this.config.duration || 3000;
    this.compose();
  }

  compose() {
    var nextIndex, prevIndex;
    prevIndex = this.index > 0 ? this.index - 1 : this.children.length - 1;
    nextIndex = this.index < this.children.length - 1 ? this.index + 1 : 0;
    Array.prototype.forEach.call(this.children, function (el) {
      el.classList.remove('prev');
      el.classList.remove('current');
      el.classList.remove('next');
      return true;
    });
    this.children[prevIndex].classList.add('prev');
    this.children[this.index].classList.add('current');
    this.children[nextIndex].classList.add('next');
    return this;
  }

  play() {
    var that;
    that = this;
    this.playingStateID = setInterval(function () {
      return that.next();
    }, this.duration);
    this.isPlaying = true;
    return this;
  }

  pause() {
    clearInterval(this.playingStateID);
    this.isPlaying = false;
    return this;
  }

  playpause() {
    if (this.isPlaying) {
      return this.pause();
    } else {
      return this.play();
    }
  }

  prev() {
    var playingState;
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.children.length - 1;
    }
    playingState = this.isPlaying;
    if (playingState) {
      this.pause();
    }
    this.compose();
    if (playingState) {
      return this.play();
    }
  }

  next() {
    var playingState;
    if (this.index < this.children.length - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    playingState = this.isPlaying;
    if (playingState) {
      this.pause();
    }
    this.compose();
    if (playingState) {
      return this.play();
    }
  }
  on(event, fn) {
    var that;
    that = this;
    this.parent.addEventListener(event, fn);
    return this;
  }
  off(event, fn) {
    var that;
    that = this;
    this.parent.removeEventListener(event, fn);
    return this;
  }
  inspect() {
    var err;
    console.group(this.parentSelector);
    try {
      console.info(this.children.length + ' slides');
    } catch (error) {
      err = error;
      console.error(err);
    }
    console.groupEnd(this.parentSelector);
    return this;
  }
}