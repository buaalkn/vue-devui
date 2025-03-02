import { nextTick } from 'vue';
import message from '../src/message-service';
import { useNamespace } from '../../shared/hooks/use-namespace';

const ns = useNamespace('message', true);
describe('d-message', () => {
  describe('service', () => {
    it('render correctly when using service', async () => {
      message({
        message: 'message content',
      });
      await nextTick();
      const messageDom = document.querySelector(ns.b());
      const messageDomContent = document.querySelector(ns.e('content'));
      expect(messageDom).toBeTruthy();
      expect(messageDomContent?.innerHTML).toBe('message content');
    });

    it('message type', async () => {
      message({
        message: 'success type',
        type: 'success',
      });
      await nextTick();
      const messageDomImage = document.querySelector(ns.e('image'));
      expect(messageDomImage?.className).toContain(ns.em('image', 'success').slice(1));
    });

    it('message showClose', async () => {
      message({
        message: 'message showClose param',
        type: 'success',
        showClose: true,
      });
      await nextTick();
      const messageDomClose = document.querySelector(ns.e('close'));
      expect(messageDomClose).toBeTruthy();
    });

    it('close callback', async () => {
      const closeCallback = jest.fn();
      message({
        message: 'message close callback',
        duration: 1000,
        onClose: closeCallback,
      });
      await nextTick();
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      expect(closeCallback).toBeCalled();
    });

    it.todo('bordered should work well.');

    it.todo('shadow should work well.');
  });

  describe('function', () => {
    it.todo('function call work well.');
  });
});
