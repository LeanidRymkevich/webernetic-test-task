import '@src/index.scss';

const TRY_FREE_BTN_SELECTOR = '.demo__btn';
const MODAL_SELECTOR = '.modal';
const MODAL_VISIBLE_CLASS = 'modal_visible';
const MODAL_CLOSE_BTN_SELECTOR = '.modal__close-btn';
const NO_SCROLL_CLASS = '_no-scroll';
const MODAL_WINDOW_SELECTOR = '.modal__window';

const tryFreeBtn: Element | null = document.querySelector(
  TRY_FREE_BTN_SELECTOR
);
const modal: Element | null = document.querySelector(MODAL_SELECTOR);

if (!tryFreeBtn) throw new Error('"Try free" btn-element not found');
if (!modal) throw new Error('Modal window element not found');

const showModal = (): void => {
  modal.classList.add(MODAL_VISIBLE_CLASS);
  document.body.classList.add(NO_SCROLL_CLASS);
};

const hideModal = (): void => {
  modal.classList.remove(MODAL_VISIBLE_CLASS);
  document.body.classList.remove(NO_SCROLL_CLASS);
};

const modalClickHandler = (event: Event): void => {
  const target: Element | null = event.target as Element;
  if (!target) return;

  if (
    target.closest(MODAL_CLOSE_BTN_SELECTOR) ||
    !target.closest(MODAL_WINDOW_SELECTOR)
  ) {
    hideModal();
  }
};

tryFreeBtn.addEventListener('click', showModal);
modal.addEventListener('click', modalClickHandler);
