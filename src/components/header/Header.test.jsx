import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { createMemoryHistory } from 'history';

describe('Header component', () => {
  it('Header renders', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    screen.debug();
  });

  it('renders обране link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const linkElement = screen.getByText(/обране/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('Header empty snapshot', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const header = render(
      <Router>
        <Header />
      </Router>
    );
    expect(header).toMatchSnapshot();
  });

  it('Header renders component', async () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    await screen.findByTestId('firstName');
    screen.debug();
    userEvent.type(screen.getByTestId('firstName'), 'Євген');
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    screen.debug();
  });
});

describe('React router', () => {
  it('shold navigate to favorites', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const navigation = getByTestId('navigation');
    const link = getByTestId('favorites-link');
    expect(container.innerHTML).toMatch('ОБРАНЕ');
    expect(navigation).toContainElement(link);
  });

  it('shold navigate to home', () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    const navigation = getByTestId('navigation');
    const link = getByTestId('home-link');
    expect(container.innerHTML).toMatch('ГOЛOВНА');
    expect(navigation).toContainElement(link);
  });
});
