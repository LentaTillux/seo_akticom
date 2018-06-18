import objectFitImages from 'object-fit-images';
import fancybox from '@fancyapps/fancybox';

import './Header';
import './Sliders';
import './RangeInput';
import './tabs';
import './readMore';
import './popupInit';

// import './ContactMap';

export class Common {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  constructor() {
    this.init();
  }
  /**
   * Initialize common scripts.
   */
  init() {
    objectFitImages();
  }
}

/** Export initialized common scripts by default */
export default new Common();
