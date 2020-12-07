import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from '../components/App';

const PAGE_SIZE = 15;

const wait = time =>
  act(() => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  });

test.only('sample test', async () => {
  render(<App />);

  await wait(707);

  expect(screen.queryAllByTestId('issue')).toHaveLength(PAGE_SIZE);

  fireEvent.scroll(window, { target: { scrollTop: -500 } });
  fireEvent.scroll(window, { target: { scrollTop: 0 } });

  await wait(707);

  expect(screen.queryAllByTestId('issue')).toHaveLength(2 * PAGE_SIZE);

  fireEvent.click(screen.getByTestId('open-issues'));
  await wait(1);

  expect(screen.queryByTestId('loading')).toBeInTheDocument();

  await wait(707);

  expect(screen.queryAllByTestId('issue')).toHaveLength(PAGE_SIZE);
  expect(screen.queryByTestId('loading')).toBeNull();
});
