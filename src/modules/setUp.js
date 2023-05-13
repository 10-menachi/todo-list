import setupDeleteButtons from './setUpDeleteButtons';
import setUpCheckBoxes from './setupCheckboxes';
import setupEditButtons from './setupEditButtons';

const setUp = () => {
  setupDeleteButtons();
  setupEditButtons();
  setUpCheckBoxes();
};

export default setUp;