import { render, screen } from '@testing-library/react';
import { instance } from './api/index'
import App from './App';

// Used this GitHub post for reference:
// https://github.com/axios/axios/issues/511

//// ===== This one works =====
////  - Has the effect of replacing existing axios instance with mock elements?
// jest.mock('axios', () => {
//   return {
//     create: jest.fn(() => ({
//       get: jest.fn(),
//       interceptors: {
//         request: { use: jest.fn(), eject: jest.fn() },
//         response: {
//           use: jest.fn((handler) => {
//             console.log("lol...")
//           }), eject: jest.fn() }
//       }
//     }))
//   }
// })

//// ===== This one works too...wait, no it doesn't lol =====
////  - Apparently don't need to explicitly define individual functions on the mock Axios object...?
// jest.mock('axios')

test('Checking the mock', () => {
  render(<App />);

  console.log(instance)
  console.log("^instance")
  console.log(instance.interceptors.response.handlers[0].rejected({ "response": { "status": 502}} ))
  console.log("end...")
});
