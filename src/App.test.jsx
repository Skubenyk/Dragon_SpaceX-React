import { MemoryRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App component', () => {
  it('App renders', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    screen.debug();
  });

  it('Fetches rockets from an API', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { rockets } })
    );
    const { getByRole, findAllByRole } = render(
      <Router>
        <App />
      </Router>
    );
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      'https://api.spacexdata.com/v4/dragons'
    );
  });
});
