import { useEffect } from 'react';

const useDragScroll = (target: HTMLElement | undefined | null, beforeTriggerBuffer = 10) => {
  useEffect(() => {
    if (!target) {
      return;
    }

    let isMouseDown = false;
    let startScrollTop = 0;
    let startScrollLeft = 0;
    let startMousePosX = 0;
    let startMousePosY = 0;

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) {
        return;
      }

      event.preventDefault();

      isMouseDown = true;

      startScrollTop = target.scrollTop;
      startScrollLeft = target.scrollLeft;

      startMousePosX = event.screenX;
      startMousePosY = event.screenY;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
      target.inert = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) {
        return;
      }

      const mouseDeltaX = startMousePosX - event.screenX;
      const mouseDeltaY = startMousePosY - event.screenY;

      if (
        !target.inert &&
        (Math.abs(mouseDeltaX) > beforeTriggerBuffer || Math.abs(mouseDeltaX) > beforeTriggerBuffer)
      ) {
        target.inert = true;

        // set new start mouse pos to prevent jump on trigger
        startMousePosX = event.screenX;
        startMousePosY = event.screenY;

        return;
      }

      if (target.inert) {
        target.scrollTo({
          left: startScrollLeft + mouseDeltaX,
          top: startScrollTop + mouseDeltaY,
          behavior: 'instant',
        });
      }
    };

    target.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      target.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [beforeTriggerBuffer, target]);
};

export default useDragScroll;
