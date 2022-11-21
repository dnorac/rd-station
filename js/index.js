import initNavigation from './navigation.js';
import initPlayer from './player.js';
import initSlider from './slider.js';
import initOpportunitiesForm from './opportunities-form/index.js';
import initFrameLooper from './frame-looper.js';

initFrameLooper();
initNavigation();
initPlayer();
initSlider();
initOpportunitiesForm({
  form: document.querySelector("#opportunities-form")
});