import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { render } from '../../test-utils';
import Cita from './Cita';

const server = setupServer(
  rest.get('/quotes', (_, res, ctx) => {
    return res(ctx.json({cita: 'cita deu certo'}))
  }),
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loading quotes', async() => {
    render(<Cita />);

    const cita =  await screen.findByText("Nenhuma citação encontrada");

    expect(cita).toBeTruthy();
})